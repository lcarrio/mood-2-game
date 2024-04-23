import Image from "next/image";
import Logo from "../public/logo2.png";
import Footer from "../components/footer";
import GameButton from "@/components/gamebutton";
export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div class="flex items-center justify-between bg-base-300  my-2 rounded-box " style={{ width: '50%'}}>
        <a class="btn btn-square btn-ghost  mx-2 my-2" href="/">
          <Image src={Logo} alt="Mouse" />
        </a>
        <h1 class="font-bold text-4xl ">Game2Mouse</h1>
        <h1 className=""></h1>
    </div>
    <div className="hero">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-6xl font-bold ">Discover top-rated mouse based on your game</h1>
          <p className="py-6">Which game are you playing now?</p>
        </div>
      </div>
      </div>

    <div className="grid grid-cols-4 grid-rows-5 gap-4 justify-items ">
      <GameButton GameIcon={"/rifle.svg"} GameName={"CS:GO"}/>
      <GameButton GameIcon={"/pistol.svg"} GameName={"Valorant"}/>
      <GameButton GameIcon={"/assault-rifle.svg"} GameName={"Apex"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"Rust"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"League"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"Dota"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"Smite"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"Warzone"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"Fortnite"}/>
      <GameButton GameIcon={"/siegeicon.svg"} GameName={"HellDivers"}/>
    </div>
    <Footer CoffeeIcon={"/coffee-cup.svg"}/>
  </div>
  );
}
