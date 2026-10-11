export const socialImage = {
  url: '/drama-jewelry-hero.png',
  width: 941,
  height: 1672,
  alt: 'Moon Ocean Studio jewelry drama ad concept'
};

export function pageMetadata(path, title, description) {
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
      images: [socialImage]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage]
    }
  };
}
