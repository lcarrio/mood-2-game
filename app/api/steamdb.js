const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export async function Query(QueryGenre) {
  const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
  try {
    if (QueryGenre === undefined) {
      return "Query is undefined!";
    }
    const database = client.db("mood2game");
    const games = database.collection("steam");
    // Query for a game
    const query = { genres: QueryGenre };
    const game = await games.find(query).toArray();
    //Return a game with
    return game[getRandomInt(game.length)];
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
