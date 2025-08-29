export default function Bg() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none w-full h-auto absolute z-0 top-0 mask-b-from-0 opacity-30"
    >
      <source src="/bg.mp4" type="video/mp4" />
      Twoja przeglądarka nie wspiera odtwarzania wideo.
    </video>
  );
}
