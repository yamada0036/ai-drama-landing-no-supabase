import { absoluteUrl } from './site';

export const socialImage = {
  url: '/drama-jewelry-hero.png',
  width: 941,
  height: 1672,
  alt: 'Moon Ocean Studio jewelry drama ad concept'
};

export function pageMetadata(path, title, description, image = socialImage) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: 'Moon Ocean Studio',
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export function watchMetadata(video) {
  const poster = {
    url: video.poster,
    width: 540,
    height: 960,
    alt: `${video.title} poster`
  };
  const meta = pageMetadata(video.path, video.metaTitle, video.metaDescription, poster);
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'video.other',
      videos: [{
        url: absoluteUrl(video.src),
        type: 'video/mp4',
        width: video.width,
        height: video.height
      }]
    }
  };
}
