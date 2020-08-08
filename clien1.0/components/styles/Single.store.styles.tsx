import styled from "styled-components";
import { below } from "./Helpers";

export const StoreStyles = styled.section`
  border-radius: 1rem 1rem 0 0;
  ${({ theme }) => theme.shadow.elevations[2]};
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors.background};
`;

interface StoreHeroProps {
  bgImg: string;
}
export const StoreHero = styled.div<StoreHeroProps>`
  background: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
  position: relative;
  border-radius: 1rem 1rem 0 0;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem 1rem 0 0;
    background: ${(props) => props.theme.colors.shadowOne};
    width: 100%;
    height: 100%;
  }
`;

export const TitleAttached = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  ${below.medium`
    top: 35%;
    width: 100%;
    h1{
      font-size: 3rem;
    }
    h3{
      font-size: 2rem;
    }
    a{
      padding: .2rem;
    }
  `}
  ${below.small`
    top: 32%;
      h1{
        font-size: 2rem;
      }
      h3{
        font-size: 1.7rem;
      }
      a{
        padding: .2rem;
        font-size: 1.2rem;
      }
  `}
`;

export const Info = styled.aside`
  position: relative;
  padding: 5rem 1rem;
  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.button};
    text-align: center;
  }
  #noAuthMsg {
    text-align: center;
    text-transform: capitalize;
  }
  a {
    display: block;
    margin: 0 auto;
    width: 30rem;
    display: flex;
    justify-content: center;
  }
`;

export const Tag = styled.div`
  background: ${(props) => props.theme.colors.button};
  color: #fff;
  width: 16rem;
  padding: 1rem 0.8rem;
  border-radius: 1rem;
  ${({ theme }) => theme.shadow.elevations[2]};
  position: absolute;
  right: 1rem;
  top: 1rem;
  text-align: center;
`;
