import { QueryAppid } from "../app/api/descdb";
import { QueryMedia } from "../app/api/mediadb";
import { Query } from "../app/api/steamdb";
import Footer from "./footer";
import Navbar from "./navbar";
import RefreshPage from "./refreshpage";
import getRandomInt from "./randint";
let index = 0;

export default async function MoodCard({ QueryCall, Mood, PageLink }) {
  const QueryGenre = QueryCall;
  const games = await Query(QueryGenre);
  const game = games[index++];
  const gameDesc = await QueryAppid(game.appid);
  const gameImage = await QueryMedia(game.appid);
  const myArray = game.steamspy_tags.split(";");

  return (
    <div
      id="myPage"
      class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto"
    >
      <main>
        <Navbar NavIcon={"/logo2.png"} NavText={Mood} />
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
              class="card-title tracking-tight cursor-pointer whitespace-nowrap overflow-auto noScroolBar font-light"
              data-tip="Click to copy title"
              currentitem="false"
            >
              {game.name}
            </h2>
            <div class="text-lg font-mono text-slate-100">
              ${game.price} · {game.developer}
            </div>
            <div class="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar">
              <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
                {myArray[0]}
              </div>
              <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
                {myArray[1]}
              </div>
              <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
                {myArray[2]}
              </div>
            </div>
            <div class="opacity-75 h-24 md:h-28 overflow-auto text-sm md:text-base">
              {gameDesc.short_description}
            </div>
            <div class="card-actions justify-end">
              <button
                class="btn md:btn-sm border-[1.5px] border-primary hover:btn-primary btn-outline btn-outline"
                onClick={RefreshPage}
              >
                <span class="mr-1">➡️</span> NEXT
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
