import Navbar from "../../../components/navbar";
export default function Cheerful() {
  return (
    <div class="min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
      <main>
        <Navbar NavIcon={"/logo2.png"} NavText={"Feeling 😁 Cheerful"} />
        <div class="card card-compact md:card-normal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto"></div>
      </main>
    </div>
  );
}
