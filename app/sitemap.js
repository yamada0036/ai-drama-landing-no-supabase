export default function sitemap(){
 const base='https://ai-drama-landing-no-supabase.vercel.app';
 return ['', '/ai-drama-ads','/ai-short-drama-ads','/branded-short-drama','/examples','/contact'].map(path=>({
   url:base+path,
   lastModified:new Date(),
   changeFrequency:path===''?'weekly':'monthly',
   priority:path===''?1:.8
 }));
}
