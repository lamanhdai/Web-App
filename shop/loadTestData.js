import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  // db.collection('shop').insertMany([
  //   { id: 1, typeName: 'Business/Company', contestName: 'Cognitive Building Bricks',
  //     description: `
  //       This product is a classroom tool that scaffolds higher order thinking. Its a collaborative strategy that using building bricks to help structure students ideas. Learners build knowledge structures with information (attached to different coloured bricks). Students desks are turned into workshops where they physically manipulate information into meaningful creations. They show sequences of information (like stories), rank information by importance and pretty much all other essential cognitive skills you need at school. The end result is clarity in thought and better collaborative conversations. I want this to be marketed as a sophisticated knowledge tool applicable to all ages and subjects. It gives students the cognitive edge, they get a little more 'RAM'!.

  //       I want to continue with the construction/building theme as well as the mind/brain/learning theme. They need to be blended somehow. Teachers find it easier to talk about building/scaffolding analogies as its less abstract.
  //     `,
  //     nameIds: [101, 102] },
  //   { id: 2, typeName: 'Magazine/Newsletter', contestName: 'Educating people about sustainable food production',
  //     description: `
  //       Educating people about sustainable food production
  //     `,
  //     nameIds: [] },
  //   { id: 3, typeName: 'Software Component', contestName: 'Big Data Analytics for Cash Circulation',
  //   description: `
  //     Data is created at every touch point in a notes life-cycle. Because of the volume of the data, it can be difficult to store, analyse and gain insight. Collecting, processing and analysing the data using big data technologies and displaying the results in an interactive display makes it easy to make informative decisions, overcome problem and plan for the future.

  //     It works using big data technologies and displays the results in modern browsers, combining powerful visualisation components and a data-driven approach to interact with the data.

  //     It enables you to analyse data that were not previously possible. The volume, variety, complexity of the analytical processing involved, and the responsiveness required are now achievable with the product. Gaining smarter decision making but also provide faster time to value.
  //   `,
  //     nameIds: [103, 104, 105] },
  //   { id: 4, typeName: 'Website', contestName: 'Free programming books',
  //   description: `
  //     A list of free online programming books, categorized by languages/topics
  //   `,
  //     nameIds: [] }
  // ])
  // .then(response => {
  //   console.info('Contests', response.insertedCount);
  //   db.collection('names').insertMany([
  //     { id: 101, name: 'Mind Assembly', timestamp: new Date() },
  //     { id: 102, name: 'Brain Scaffold', timestamp: new Date() },
  //     { id: 103, name: 'Cash View', timestamp: new Date() },
  //     { id: 104, name: 'Currency Map', timestamp: new Date() },
  //     { id: 105, name: 'Cash Board', timestamp: new Date() },
  //     { id: 106, name: 'RootLib', timestamp: new Date() },
  //   ]).then(response => {
  //     console.info('Names', response.insertedCount);
  //     db.close();
  //   });
  // });

  db.collection('types').insertMany([
    {
      id: 1,
      typeName: 'Women',
      description: 'Women section',
      subTypeIds: [1001, 1002, 1003, 1004]
    },
    {
      id: 2,
      typeName: 'Men',
      description: 'Men section',
      subTypeIds: [1001, 1002, 1003, 1004]
    },
    {
      id: 3,
      typeName: 'Jewellery',
      description: 'Jewellery section',
      subTypeIds: [1005, 1006, 1007, 1008]
    }
  ])
  .then(response => {
    console.info('types', response.insertedCount);
    db.collection('subTypes').insertMany([
      {
        id: 1001,
        name: 'Clothing',
        timestamp: new Date(),
        childTypeIds: [100001, 100002, 100003, 100004]
      },
      {
        id: 1002,
        name: 'Watches',
        timestamp: new Date(),
        childTypeIds: [100001, 100002, 100003, 100004]
      },
      {
        id: 1003,
        name: 'Styliest Bag',
        timestamp: new Date(),
        childTypeIds: [100001, 100002, 100003, 100004]
      },
      {
        id: 1004,
        name: 'Material Bag',
        timestamp: new Date(),
        childTypeIds: [100001, 100002, 100003, 100004]
      },
      {
        id: 1005,
        name: 'Precious Jewellery',
        timestamp: new Date(),
        childTypeIds: [100005, 100006, 100007, 100008]
      },
      {
        id: 1006,
        name: 'Fashion Jewellery',
        timestamp: new Date(),
        childTypeIds: [100005, 100006, 100007, 100008]
      },
      {
        id: 1007,
        name: 'Platinum',
        timestamp: new Date(),
        childTypeIds: [100005, 100006, 100007, 100008]
      },
      {
        id: 1008,
        name: 'Designer',
        timestamp: new Date(),
        childTypeIds: [100005, 100006, 100007, 100008]
      },
    ])
    .then(response => {
      console.info('subTypes', response.insertedCount);
      db.collection('childTypes').insertMany([
        {
          id: 100001,
          name: 'Western',
          timestamp: new Date(),
          productIds: [10000001]
        },
        {
          id: 100002,
          name: 'Sports',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100003,
          name: 'Casual',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100004,
          name: 'Designer',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100005,
          name: 'Rings',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100006,
          name: 'Pendants',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100007,
          name: 'Bracelets',
          timestamp: new Date(),
          productIds: []
        },
        {
          id: 100008,
          name: 'Earrings',
          timestamp: new Date(),
          productIds: []
        },
      ])
      .then(response => {
        console.info('childType', response.insertedCount);
        db.collection('products').insertMany([
          {
            id: 10000001,
            name: 'ABC',
            images: '',
            descript: '',
            price: 0,
            sale: 0,
            quantity: 1,
            timestamp: new Date()
          },
        ])
        .then(response => {
          console.info('products', response.insertedCount);
          db.close();
        });
      });
    });
  });
});
