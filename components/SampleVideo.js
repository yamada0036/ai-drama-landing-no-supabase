export default function SampleVideo({ src, poster, title, className = 'case-video' }) {
  return <video className={className} controls playsInline preload="none" poster={poster} aria-label={title}>
    <source src={src} type="video/mp4" />
    Your browser cannot play this video. <a href={src}>Open the video file</a>.
  </video>;
}
