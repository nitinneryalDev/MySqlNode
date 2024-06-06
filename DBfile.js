const { MongoClient } = require('mongodb');
const dbName = 'E-comm'
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


async function main() {
    let result = await client.connect();
    const db =  result.db(dbName);
    const collection =  db.collection('products');
    return collection
  }

  main()


 module.exports = main;