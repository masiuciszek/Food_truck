import Hero from "components/Hero";
import { HeroContentWrapper } from "components/styles/Wrappers";
import Title from "components/Title";
import { GetServerSideProps, NextPage } from "next";

interface ServerSideProps {
  data: any;
}

function Index({ data }: ServerSideProps) {
  return (
    <>
      <Hero className='Hero-Home'>
        <HeroContentWrapper>
          <Title className='HomeTitle' mainTitle='Delicious tables' />
          <img src='/images/the-munchies.png' alt='Home Hero' />
        </HeroContentWrapper>
      </Hero>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const res = await fetch("http://localhost:4000/");
  // const data = await res.json();
  return {
    props: {
      data: {},
    },
  };
};

export default Index;

// <ul>
//         <li>
//           <Link href='/a' as='/a'>
//             <a>a</a>
//           </Link>
//         </li>
//         <li>
//           <Link href='/b' as='/b'>
//             <a>b</a>
//           </Link>
//         </li>
//       </ul>
