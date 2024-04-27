export default function Navbar({NavIcon, NavText}) {
  return (
    <div class="navbar bg-base-300 rounded-box shadow-lg mb-4 md:mb-6 max-w-[40rem] mx-auto">
      <div class="navbar-start">
        <a class="btn btn-square btn-ghost" aria-label="go to home page" href="/" >
            <div class="relative w-full aspect-square m-1">
                <img src={NavIcon} alt="NavIcon"></img>
            </div>
        </a>
      </div>
      <div class="navbar-center">
        <div class="nunito text-center text-xl">
          {NavText}
        </div>
      </div>
      <div class="navbar-end">
      </div>
    </div>
   );
}