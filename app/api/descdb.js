const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function DescQuery(appID) {
  try {
    if (appID === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam_description");
    // Query for a game
    const query = { steam_appid: appID };
    const description = await games.find(query);
    //Return a game with
    return description;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
