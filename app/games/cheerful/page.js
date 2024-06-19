import Navbar from "../../../components/navbar";
import { Query } from "../../api/steamdb";
import { QueryAppid } from "../../api/descdb";
import { QueryMedia } from "../../api/mediadb";
import Footer from "../../../components/footer";
const QueryGenre = "Indie;Strategy";
const game = await Query(QueryGenre);
const gameDesc = await QueryAppid(game.appid);
const gameImage = await QueryMedia(game.appid);
console.log(gameDesc);
export default function Cheerful() {
  return (
    <div class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
      <main>
        <Navbar NavIcon={"/logo2.png"} NavText={"Feeling 😁 Cheerful "} />
        <div class="card card-compact md:card-normal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
          <figure>
            <div class="w-full">
              <img
                src={gameImage.header_image}
                alt="Italian Trulli"
                class="w-full"
              />
            </div>
          </figure>
          <div class="card-body">
            <h2
              class="card-title tracking-tight cursor-pointer whitespace-nowrap overflow-auto noScrollBar"
              data-tip="Click to copy title"
              currentitem="false"
            >
              {game.name}
            </h2>
            <div class="text-lg">${game.price}</div>
          </div>
          <div>{gameDesc.short_description}</div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
