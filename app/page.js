import Image from "next/image";
import Mouse from "../public/mouse.png";
import Rifle from "../public/rifle.svg";
import Pistol from "../public/pistol.svg";
import Ar from "../public/assault-rifle.svg";
export default function Home() {
  return (
    // Navbar with home button 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div class="flex items-center justify-between bg-base-300  my-2 rounded-box " style={{ width: '50%'}}>
        <a class="btn btn-square btn-ghost  mx-2 my-2" href="/">
          <Image src={Mouse} alt="Mouse" />
        </a>
        <h1 class="font-bold text-4xl ">Game2Mouse</h1>
        <h1 className="mx-4"></h1>
    </div>
    <div className="hero">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-6xl font-bold ">Discover top-rated mouse based on your game</h1>
          <p className="py-6">Which game are you playing now?</p>
        </div>
      </div>
      </div>

    <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items px-20 ">
      <a class="btn btn-outline btn-primary  " href="/mouse">
        <h1 class="flex text-2xl font-bold"> <Image src={Rifle} alt="CsIcon" class="h-8 w-8" />CS:GO </h1>
      </a>
      <a class="btn btn-outline btn-primary  " href="/">
        <h1 class="flex text-2xl font-bold"> <Image src={Pistol} alt="ValIcon" class="h-8 w-8" />Valorant</h1>
      </a>
      <a class="btn btn-outline btn-primary  " href="/">
        <h1 class="flex text-2xl font-bold"> <Image src={Ar} alt="ApexIcon" class="h-8 w-8" />Apex</h1>
      </a>
      <a class="btn btn-outline btn-primary  " href="/">
        <h1 class="flex text-2xl font-bold"> <Image src={Ar} alt="ApexIcon" class="h-8 w-8" />Apex</h1>
      </a>
    </div>
  </div>
  );
}
