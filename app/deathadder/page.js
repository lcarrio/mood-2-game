import Footer from "@/components/footer";
import MouseCard from "@/components/mousecard";
export default function deathadder() {
  return(
    <div>
<MouseCard 
    GameTittle="Counter Strike: Global Offensive"
    MouseName = "RAZER DEATHADDER V3"
    MouseImage = "/deathadder.png"
    MouseDescription = "The Zowie EC2 is notably rocked by ISSAA, Shockz, and PRT. It's shell naturally contours to your hand, offering relaxed support for both your palm and fingers (think of a deathadder combined with a gpro). The concave curve on the right side facilitates a firm and effortless grip for your fourth and little fingers. Making the Zowie Ec2 one of the best mouse for CS2 in 2024."
    AppLogo={"/logo2.png"}
    PlayerPic={"/issa.png"}
    AmazonIcon={"amazon.png"}
    GameIcon={"/rifle.svg"}/>
    <Footer CoffeeIcon={"/coffee-cup.svg"}/>
    </div>
  
  );

}