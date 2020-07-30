import Hero from "components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero className='Hero-Home'>
        <h1>Content Goes here</h1>
      </Hero>
      <ul>
        <li>
          <Link href='/a' as='/a'>
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href='/b' as='/b'>
            <a>b</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
