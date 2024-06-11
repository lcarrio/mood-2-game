const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export async function QueryAppid(appid) {
  try {
    if (QueryAppid === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam_description");
    // Query for a game
    const query = { steam_appid: appid };
    const game = await games.findOne(query);
    console.log(game);
    //Return a game with
    return game;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
