import Hero from "components/Hero";
import { HeroContentWrapper } from "components/styles/Wrappers";
import * as React from "react";
import Title from "components/Title";
import Image from "components/Image";

function Index() {
  return (
    <>
      <Hero className='Hero-Home'>
        <HeroContentWrapper>
          <Title
            className='HomeTitle'
            mainTitle='Delicious tables'
            cta
            ctaText='Tables'
            ctaPath='tables'
          />
          <Image imagePath='/images/the-munchies.png' imageAlt='Home Hero' />
        </HeroContentWrapper>
      </Hero>
    </>
  );
}

export default Index;
