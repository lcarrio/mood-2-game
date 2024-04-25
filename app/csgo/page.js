
import MouseCard from "@/components/mousecard";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Mouse() {
    return(
      <div>
        <Header GameTittle="Counter Strike: Global Offensive" GameIcon={"/rifle.svg"}/>
        <div className="grid grid-cols-5 gap-0">
          <h1></h1>
        <MouseCard 
        MouseName = "ZOWIE EC2"
        MouseImage = "/zowieec2white.svg"
        PlayerPic={"/issa.png"}
        AmazonIcon={"amazon.png"}
        />
         <MouseCard 
        MouseName = "Deathadder V3"
        MouseImage = "/deathadder2resized.png"
        PlayerPic={"/issa.png"}
        AmazonIcon={"amazon.png"}
        />
          <MouseCard 
        MouseName = "Logitech G Pro 2" 
        MouseImage = "/zowieec2.webp"
        PlayerPic={"/issa.png"}
        AmazonIcon={"amazon.png"}
        />
        </div>
        <Footer></Footer>
    </div>
);
}