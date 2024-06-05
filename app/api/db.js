const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
export async function Query(QueryGenre) {
  try {
    if (QueryGenre === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam");
    // Query for a movie that has the title 'Back to the Future'
    const query = { genres: QueryGenre };
    const game = await games.findOne(query);
    console.log(QueryGenre);
    return game;
    // console.log(game.appid);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
