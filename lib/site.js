export const SITE = 'https://ai-drama-landing-no-supabase.vercel.app';

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE}/`;
  return `${SITE}${path.startsWith('/') ? path : `/${path}`}`;
}
