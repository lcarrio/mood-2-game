import Image from "next/image";
import MouseIcon from "../../public/mouse.png";
import Rifle from "../../public/rifle.svg";
export default function Mouse() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div class="flex items-center justify-between bg-base-300  my-2 rounded-box " style={{ width: '50%'}}>
          <a class="btn btn-square btn-ghost  mx-2 my-2" href="/">
            <Image src={MouseIcon} alt="Mouse" />
          </a>
          <h1 class="flex text-2xl font-bold"> <Image src={Rifle} alt="CsIcon" class="h-8 w-8" />Counter Strike: Global Offensive </h1>
          <h1 className="mx-4"></h1>
      </div>
    </div>
);
}