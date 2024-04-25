const MouseCard = ({
    MouseName,
    MouseImage,
    AmazonIcon,
    PlayerCount,
    AmazonLink,
    EconomyRating,
    IGNRating
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
  <h1 class="">IGN Rating</h1>
  <h1>{IGNRating}</h1>
  <h1>Pro Player Count:</h1>
  <h1>{PlayerCount}</h1>
  <h1>Economy Rating</h1>
  <h1>{EconomyRating}</h1>
</div>
   <div className="card-actions p-4">
     <a className="btn btn-primary"><img src={AmazonIcon} class="w-6" href={AmazonLink}></img>Check price</a>
   </div>
 </div>
    </div>
  );
}
export default MouseCard;

