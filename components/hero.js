import MoodButton from "./moodbutton";

export default function Hero(){
return(
    <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight nunito mb-4">Discover top-rated games based on your mood</h1>
        <div class="text-xl mb-4">How are you feeling now?</div>
        <div class="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        <MoodButton MoodName="😁 CHEERFUL" PageLink="/games/cheerful"/>
        <MoodButton MoodName="🤔 REFLECTIVE" PageLink="/"/>
        <MoodButton MoodName="😔 GLOOMY" PageLink="/"/>
        <MoodButton MoodName="😂 HUMOROUS" PageLink="/"/>
        <MoodButton MoodName="🥺 SORROW" PageLink="/"/>
        <MoodButton MoodName="🤩 IDYLLIC" PageLink="/"/>
        <MoodButton MoodName="😎 CHILL" PageLink="/"/>
        <MoodButton MoodName="😍 ROMANTIC" PageLink="/"/>
        <MoodButton MoodName="🤓 WEIRD" PageLink="/"/>
        <MoodButton MoodName="🤠 DARING" PageLink="/"/>
        <MoodButton MoodName="😴 SLEEPY" PageLink="/"/>
        <MoodButton MoodName="😡 ANGRY" PageLink="/"/>
        <MoodButton MoodName="😱 FEARFUL" PageLink="/"/>
        <MoodButton MoodName="😩 LONELY" PageLink="/"/>
        <MoodButton MoodName="😤 TENSE" PageLink="/"/>
        <MoodButton MoodName="🧐 THOUGHTFUL" PageLink="/"/>
        <MoodButton MoodName="🤪 THRILL-SEEKING" PageLink="/"/>
        <MoodButton MoodName="😏 PLAYFUL" PageLink="/"/>
        </div>
    </div>
);
}