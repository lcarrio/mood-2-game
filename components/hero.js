import MoodButton from "./moodbutton";

export default function Hero() {
  return (
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight nunito mb-4">
        Discover top-rated games based on your mood
      </h1>
      <div class="text-xl mb-4">How are you feeling now?</div>
      <div class="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        <MoodButton MoodName="😁 CHEERFUL" PageLink="/moods/cheerful" />
        <MoodButton MoodName="🤔 REFLECTIVE" PageLink="/moods/reflective" />
        <MoodButton MoodName="😔 GLOOMY" PageLink="/moods/gloomy" />
        <MoodButton MoodName="🥺 SORROW" PageLink="/moods/sorrow" />
        <MoodButton MoodName="🤩 IDYLLIC" PageLink="/moods/idyllic" />
        <MoodButton MoodName="😎 CHILL" PageLink="/moods/chill" />
        <MoodButton MoodName="😍 ROMANTIC" PageLink="/moods/romantic" />
        <MoodButton MoodName="🤓 WEIRD" PageLink="/moods/weird" />
        <MoodButton MoodName="🤠 DARING" PageLink="/moods/daring" />
        <MoodButton MoodName="😴 SLEEPY" PageLink="/moods/sleepy" />
        <MoodButton MoodName="😡 ANGRY" PageLink="/moods/angry" />
        <MoodButton MoodName="😱 FEARFUL" PageLink="/moods/fearful" />
        <MoodButton MoodName="😩 LONELY" PageLink="/moods/lonely" />
        <MoodButton MoodName="😤 TENSE" PageLink="/moods/tense" />
        <MoodButton MoodName="🧐 THOUGHTFUL" PageLink="/moods/thoughtful" />
        <MoodButton MoodName="🤪 THRILL-SEEKING" PageLink="/moods/thrill-seeking" />
        <MoodButton MoodName="😏 PLAYFUL" PageLink="/moods/playful" />
        <MoodButton MoodName="🤣 HUMOROUS" PageLink="/moods/humorous" />
      </div>
    </div>
  );
}
