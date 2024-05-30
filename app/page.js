import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("mood2game");
    const games = database.collection("steam");
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "Counter-Strike" };
    const game = await games.findOne(query);
    console.log(game.appid);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export default async function Home() {
  return (
    <div class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
      <main>
        <Navbar NavIcon={"/logo2.png"} NavText={"Mood2Game"} />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
