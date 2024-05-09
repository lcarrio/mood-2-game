import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { getPosts } from "../_actions/postActions";
export default async function Home() {
  const res = await getPosts();
  console.log(res);
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
