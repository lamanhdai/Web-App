import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/types', (req, res) => {
  let types = {};
  mdb.collection('types').find({})
     .project({
       typeName: 1,
     })
     .each((err, type) => {
       assert.equal(null, err);

       if (!type) { // no more types
         res.send({ types });
         return;
       }

       types[type._id] = type;
     });
});

router.get('/names/:nameIds', (req, res) => {
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  mdb.collection('names').find({ _id: { $in: nameIds }})
     .each((err, name) => {
       assert.equal(null, err);

       if (!name) { // no more names
         res.send({ names });
         return;
       }

       names[name._id] = name;
     });
});


router.get('/types/:typeId', (req, res) => {
  mdb.collection('types')
     .findOne({ _id: ObjectID(req.params.typeId) })
     .then(type => res.send(type))
     .catch(error => {
       console.error(error);
       res.status(404).send('Bad Request');
     });
});

router.post('/names', (req, res) => {
  const typeId = ObjectID(req.body.typeId);
  const name = req.body.newName;
  // validation ...
  mdb.collection('names').insertOne({ name }).then(result =>
    mdb.collection('types').findAndModify(
      { _id: typeId },
      [],
      { $push: { nameIds: result.insertedId } },
      { new: true }
    ).then(doc =>
      res.send({
        updatedType: doc.value,
        newName: { _id: result.insertedId, name }
      })
    )
  )
  .catch(error => {
    console.error(error);
    res.status(404).send('Bad Request');
  });
});

export default router;
