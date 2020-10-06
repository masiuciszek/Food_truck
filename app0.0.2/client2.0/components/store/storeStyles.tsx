import styled from "styled-components";
import { handleFlex, below } from "../../src/utils/helpers";

interface StoreHeroProps {
  image: string;
}

export const Wrapper = styled.section`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  background: ${({ theme }) => theme.colors.elements.headline};
  margin: 3rem 0 12rem 0;
  ${below.small`
    margin-bottom: 3em;
  `}
`;

export const StoreHero = styled.div<StoreHeroProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
  border-radius: 4px 4px 0 0;
  position: relative;
  &:after {
    content: "";
    background-image: linear-gradient(
      to right top,
      rgba(167, 169, 190, 0.3),
      rgba(197, 156, 203, 0.3),
      rgba(245, 134, 178, 0.26),
      rgba(255, 120, 115, 0.3),
      rgba(255, 137, 6, 0.3)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const StoreProfileBody = styled.div`
  background: ${({ theme }) => theme.colors.elements.headline};
  padding: 1em 3em;
  border-radius: 0 0 4px 4px;
  position: relative;
  display: flex;
  min-height: 20em;
  .col1,
  .col2 {
    flex: 1;
  }

  .col2 {
    button {
      width: 12em;
      border: 2px solid ${({ theme }) => theme.colors.illustrations.highlight};
      margin-left: auto;
      display: block;
      &:hover {
        width: 11.5em;
      }
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.size.h3};
    position: absolute;
    top: -6rem;
    left: 1rem;
    background: ${({ theme }) => theme.colors.elements.button};
    color: ${({ theme }) => theme.colors.elements.headline};
    padding: 0.2em;
    border-radius: ${({ theme }) => theme.borderRadius};
    transform: rotate(-4deg);
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  }
  p {
    padding: 0.5em;
  }
  span,
  li {
    color: ${({ theme }) => theme.colors.illustrations.main};
    background: ${({ theme }) => theme.colors.illustrations.highlight};
    padding: 0.3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  }
  .tags {
    ${handleFlex("row", "flex-end", "center")};
    padding: 1em 0;
  }
  .tag {
    margin: 0.2em 0.5em;
    min-width: 3.45em;
    display: inline-block;
    text-align: center;
  }
  ${below.medium`
    ${handleFlex("column", "center", "center")};
    .col1,.col2{
      width: 100%;
    }
  `}

  ${below.small`
    padding: 1em 0;
    p{
      font-size: 1rem;
    }
  `}
`;

export const CommentsWrapper = styled.div``;
