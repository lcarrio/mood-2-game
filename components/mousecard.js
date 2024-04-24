import { IoIosCheckboxOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
const MouseCard = ({GameIcon,
    MouseName,
    MouseImage,
    PlayerPic,
    AmazonIcon,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={MouseImage} alt="mouseimage" className="rounded-xl" />
      </figure>
 <div className="card-body items-center">
   <h2 className="card-title">{MouseName}<div className="avatar">
 <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
   <img src={PlayerPic} alt="ZowieEC2" />
 </div>
</div></h2>
   
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-start">
    <div className="flex gap-x-1 items-center"><IoIosCheckboxOutline></IoIosCheckboxOutline> Pros</div></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">Cons</div>
</div>
   
   <div className="card-actions">
     <button className="btn btn-primary"><img src={AmazonIcon} class="w-6"></img>Check price</button>
   </div>
 </div>
    </div>
  );
}
export default MouseCard;