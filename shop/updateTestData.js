import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  let typeCount = 0;
  db.collection('types').find({}).each((err, type) => {
    assert.equal(null, err);
    if (!type) { return; }

    typeCount++;
    db.collection('products')
      .find({ id: { $in: type.nameIds }})
      .project({ _id: 1 })
      .toArray()
      .then(_ids => {
        const newIds = _ids.map(o => o._id);
        db.collection('types').updateOne(
          { id: type.id },
          { $set: { nameIds: newIds } }
        ).then(() => {
          console.info('Updated', type._id);
          typeCount--;
          if (typeCount === 0) { db.close(); }
        });
      })
      .catch(console.error);
  });

});
