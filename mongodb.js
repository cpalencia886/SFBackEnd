const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://cmdpalencia:<password>@spaceflexbooking.rll3n5j.mongodb.net/?retryWrites=true&w=majority&appName=SpaceFlexBooking";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("SpaceFlexBooking");
    const collection = database.collection("Booking");


    const result = await collection.insertOne({ key: "value" });
    console.log(`${result.insertedCount} documents were inserted`);

  } finally {

    await client.close();
    console.log("Connection closed");
  }
}

run().catch(console.error);
