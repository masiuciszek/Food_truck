import { above, below } from "@utils/helpers"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface PostItemProps {
  posts: FrontMatter[]
}

const PostItemStyles = styled.li`
  display: flex;
  justify-content: center;
  padding: 0.3em;
  width: 22em;
  margin: 0.8em 0;
  margin-bottom: 2em;
  border-radius: 4px;
  text-align: center;
  transition: 300ms ease-in-out all;
  ${below.small`
      width: 100%;
    `}
  ${above.small`
      width: 90%;
    `}
    ${above.medium`
      width: 70%;
    `}
    ${above.large`
      width: 55em;
    `}
    &:hover {
    transform: scale(1.06);
  }

  a {
    color: ${({ theme }) => theme.colors.illustrations.main};
    font-size: 2em;
    transition: 300ms ease-in-out all;
    position: relative;
    display: inline-block;
    &:after {
      content: "";
      transition: 300ms ease-in-out all;
      position: relative;
      position: absolute;
      background: ${({ theme }) => theme.colors.illustrations.highlight};
      bottom: 0;
      left: 0;
      width: 0;
      height: 3%;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.illustrations.highlight};
      text-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadow.highlightShadow};
      &:after {
        content: "";
        position: relative;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3%;
      }
    }
  }
`

const PostItem: React.FC<PostItemProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, name, title, date }) => (
        <PostItemStyles key={slug}>
          <li key={slug}>
            <p>Written by {name}</p>
            <p>On {date.slice(0, 12)}</p>
            <Link href={`/blog${slug}`}>
              <a> {title} </a>
            </Link>
          </li>
        </PostItemStyles>
      ))}
    </>
  )
}
export default PostItem
