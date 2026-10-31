import Link from 'next/link';

export default function RelatedLinks({ links }) {
  return <p className="editorial">{links.map(([href, label], index) => <span key={href}>{index > 0 ? ' · ' : null}<Link href={href}>{label}</Link></span>)}</p>;
}
