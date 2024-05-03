export default function MoodButton({ MoodName, PageLink }) {
  return (
    <a
      class="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline btn-outline"
      href={PageLink}
    >
      {MoodName}
    </a>
  );
}
