import Image from "next/image";
import Logo from "../public/logo2.png";
import Footer from "../components/footer";
import MoodButton from "@/components/moodbutton";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
    <main>
    <Navbar NavIcon={"/logo2.png"} />
    <Hero/>
    </main>
    <Footer/>
  </div>
  );
}
