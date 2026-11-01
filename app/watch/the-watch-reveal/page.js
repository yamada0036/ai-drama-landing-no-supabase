import WatchPageView from '../../../components/WatchPageView';
import { watchMetadata } from '../../../lib/metadata';
import { watchBySlug } from '../../../lib/videos';

const video = watchBySlug('the-watch-reveal');

export const metadata = watchMetadata(video);

export default function Page() {
  return <WatchPageView video={video} />;
}
