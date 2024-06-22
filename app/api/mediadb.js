const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.

export async function QueryMedia(appid) {
  const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
  try {
    if (QueryMedia === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam_media");
    // Query for a game
    const query = { steam_appid: appid };
    const game = await games.findOne(query);
    //Return a game with
    return game;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
