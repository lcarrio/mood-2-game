export default function GameButton({GameIcon,GameName,PageLink}){
    return(
<a class="btn btn-outline btn-primary  " href={PageLink}>
<h1 class="flex text-2xl font-bold"> <img src={GameIcon} alt="CsIcon" class="h-8 w-8" />{GameName}</h1>
</a>
    )
}