const lastModified = {
  '': '2026-10-12',
  '/ai-drama-ads': '2026-10-30',
  '/ai-short-drama-ads': '2026-10-30',
  '/branded-short-drama': '2026-10-30',
  '/examples': '2026-10-12',
  '/contact': '2026-10-12',
  '/guides/ai-drama-ad-cost': '2026-10-11',
  '/guides/testing-short-drama-ads': '2026-10-12'
};

export default function sitemap(){
 const base='https://ai-drama-landing-no-supabase.vercel.app';
 return Object.keys(lastModified).map(path=>({
   url:base+path,
   lastModified:new Date(lastModified[path]),
   changeFrequency:path===''?'weekly':'monthly',
   priority:path===''?1:.8
 }));
}
