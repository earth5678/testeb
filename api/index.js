const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://diabet:1111@cluster0.ykyrfhv.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('admin');
    const users = database.collection('users');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const user = await users.findOne(query);

    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);