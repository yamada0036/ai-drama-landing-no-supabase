import { SITE } from '../lib/site';
import { videoSitemapEntry, watchVideos } from '../lib/videos';

const pages = [
  ['', '2026-10-31', 'weekly', 1],
  ['/ai-drama-ads', '2026-10-31', 'monthly', 0.8],
  ['/ai-jewelry-video-ads', '2026-10-31', 'monthly', 0.8],
  ['/tiktok-ai-drama-ads', '2026-10-31', 'monthly', 0.8],
  ['/ai-short-drama-ads', '2026-10-31', 'monthly', 0.8],
  ['/branded-short-drama', '2026-10-31', 'monthly', 0.8],
  ['/examples', '2026-10-31', 'monthly', 0.8],
  ['/watch/the-ring-reveal', '2026-10-31', 'monthly', 0.8],
  ['/watch/the-watch-reveal', '2026-10-31', 'monthly', 0.8],
  ['/watch/the-ballroom-twist', '2026-10-31', 'monthly', 0.8],
  ['/ai-micro-drama', '2026-10-31', 'monthly', 0.7],
  ['/ai-short-drama', '2026-10-31', 'monthly', 0.7],
  ['/ai-drama-generator', '2026-10-31', 'monthly', 0.7],
  ['/script-to-episode', '2026-10-31', 'monthly', 0.7],
  ['/vertical-drama', '2026-10-31', 'monthly', 0.7],
  ['/ai-drama-studio', '2026-10-31', 'monthly', 0.7],
  ['/microdrama-maker', '2026-10-31', 'monthly', 0.7],
  ['/consistent-characters', '2026-10-31', 'monthly', 0.7],
  ['/contact', '2026-10-12', 'monthly', 0.6],
  ['/guides/ai-drama-ad-cost', '2026-10-31', 'monthly', 0.7],
  ['/guides/testing-short-drama-ads', '2026-10-31', 'monthly', 0.7]
];

const videoByPath = Object.fromEntries(watchVideos.map((video) => [video.path, video]));

export default function sitemap() {
  return pages.map(([path, date, changeFrequency, priority]) => {
    const entry = {
      url: `${SITE}${path}`,
      lastModified: new Date(date),
      changeFrequency,
      priority
    };
    const video = videoByPath[path];
    if (video) entry.videos = [videoSitemapEntry(video)];
    return entry;
  });
}
