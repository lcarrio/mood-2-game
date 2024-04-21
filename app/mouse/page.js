import Image from "next/image";
import MouseIcon from "../../public/mouse.png";
import Rifle from "../../public/rifle.svg";
import ZowieEc2 from "../../public/zowieec2.webp";
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
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <Image src={ZowieEc2} alt="ZowieEC2" className="rounded-xl" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">ZOWIE EC2 <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div></h2>
    
    <p class="font-sans font-medium text-gray-400">The Zowie EC2 is notably rocked by ISSAA, Shockz, and PRT. It's shell naturally contours to your hand, offering relaxed support for both your palm and fingers (think of a deathadder combined with a gpro). The concave curve on the right side facilitates a firm and effortless grip for your fourth and little fingers. Making the Zowie Ec2 one of the best mouse for CS2 in 2024.</p>
    
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-outline btn-primary">Next</button>
    </div>
  </div>
</div>
    </div>
);
}