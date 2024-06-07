import Navbar from "../../../components/navbar";
import { Query } from "../../api/db";

export default function Cheerful() {
  const QueryGenre = "Indie;Strategy";
  //const gameName = Query(QueryGenre).then((game) => game.name + " " + game._id);
  var gameName;
  Query(QueryGenre).then((game) => {
    gameName = game.name + " " + game._id;
  });

  return (
    <div class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
      <main>
        <Navbar NavIcon={"/logo2.png"} NavText={"Feeling 😁 Cheerful "} />
        <div class="card card-compact md:card-normal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
          {gameName}
        </div>
      </main>
    </div>
  );
}
