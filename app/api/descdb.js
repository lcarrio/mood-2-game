const { MongoClient } = require("mongodb");

export async function QueryAppid(appid) {
  const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
  try {
    if (QueryAppid === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam_description");
    // Query for a game
    const query = { steam_appid: appid };
    const game = await games.findOne(query);
    //Return a game =
    return game;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
