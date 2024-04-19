import Image from "next/image";
import Mouse from "../public/mouse.png";
export default function Home() {
  return (
    <div class="flex items-center justify-between bg-base-300 mx-10 my-2 rounded-box ">
   <btn class="btn btn-square btn-ghost  mx-2 my-2">
      <Image src={Mouse} alt="Mouse" />
     </btn>
    
    <h1 class="font-bold font-sans text-xl ">Game2Mouse</h1>
    <h1></h1>
    </div>
  );
}
