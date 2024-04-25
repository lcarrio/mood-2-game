import { IoIosCheckboxOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
const MouseCard = ({
    MouseName,
    MouseImage,
    AmazonIcon,
}) => {
  return (
  
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-104 pt-10">
        <img src={MouseImage} alt="mouseimage" className="rounded-xl" />
      </figure>
 <div className="card-body items-center">
 <div className="divider divider-primary">{MouseName}
</div>
   
<div className="grid grid-cols-2 grid-rows-3 gap-4 justify-items">
  <h1>Average Rating:</h1>
  <h1>9.2 <div className="rating rating-xs">
</div></h1>
  <h1>Pro Player Count:</h1>
  <h1>5 players</h1>
  <h1>Economy Rating:</h1>
  <h1>5 players</h1>
</div>
   
   <div className="card-actions p-4">
     <button className="btn btn-primary"><img src={AmazonIcon} class="w-6"></img>Check price</button>
   </div>
 </div>
    </div>
  );
}
export default MouseCard;

