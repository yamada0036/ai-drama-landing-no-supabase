import Link from 'next/link';

export default function Nav(){
  return <header className="nav"><div className="container nav-inner">
    <Link className="brand" href="/">Moon Ocean Studio</Link>
    <nav className="nav-links">
      <Link href="/">AI Video Ads</Link>
      <Link href="/ai-drama-ads">AI Drama Ads</Link>
      <Link href="/ai-short-drama-ads">Short Drama Ads</Link>
      <Link href="/branded-short-drama">Branded Short Drama</Link>
      <Link href="/examples">Examples</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </div></header>
}
