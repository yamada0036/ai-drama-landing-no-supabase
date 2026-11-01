export default function SampleVideo({ src, poster, title, className = 'case-video', preload = 'none', width, height }) {
  return <video className={className} controls playsInline preload={preload} poster={poster} aria-label={title} width={width} height={height}>
    <source src={src} type="video/mp4" />
    Your browser cannot play this video. <a href={src}>Open the video file</a>.
  </video>;
}
