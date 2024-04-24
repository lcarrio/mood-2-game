export default function Header({GameTittle,GameIcon}) {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div class="flex items-center justify-between bg-base-300  my-2 rounded-box " style={{ width: '50%'}}>
         <a class="btn btn-square btn-ghost  mx-2 my-2" href="/">
           <img src={"/logo2.png"} alt="Mouse" />
         </a>
         <h1 class="flex text-2xl font-bold"> <img src={GameIcon} alt="CsIcon" class="h-8 w-8" />{GameTittle}</h1>
         <h1 className="mx-4"/>
    </div>
    </div>
    );
}