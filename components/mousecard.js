
const MouseCard = ({GameIcon,
    GameTittle,
    MouseName,
    MouseImage,
    MouseDescription,
    AppLogo,
    PlayerPic,
    AmazonIcon,
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div class="flex items-center justify-between bg-base-300  my-2 rounded-box " style={{ width: '50%'}}>
         <a class="btn btn-square btn-ghost  mx-2 my-2" href="/">
           <img src={applogo} alt="Mouse" />
         </a>
         <h1 class="flex text-2xl font-bold"> <img src={GameIcon} alt="CsIcon" class="h-8 w-8" />{GameTittle}</h1>
         <h1 className="mx-4"></h1>
     </div>
     <div className="card w-96 bg-base-100 shadow-xl">
 <figure className="px-10 pt-10">
   <img src={mouseimage} alt="mouseimage" className="rounded-xl" />
 </figure>
 <div className="card-body items-center">
   <h2 className="card-title">{mousename}<div className="avatar">
 <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
   <img src={playerpic} alt="ZowieEC2" />
 </div>
</div></h2>
   
   <p class="font-sans font-medium text-gray-400">{mousedescription}</p>
   
   <div className="card-actions">
     <button className="btn btn-primary"><img src={amazonicon} class="w-6"></img>Check price</button>
     <a class="btn btn-outline btn-primary  " href="/deathadder">
         Next</a>
   </div>
 </div>
</div>
    </div>
  );
}
export default MouseCard;