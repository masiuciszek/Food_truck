import { above } from "@utils/helpers"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface PaginateProps {
  postsPerPage: number
  totalPosts: number
  paginate: (pageNumber: number) => void
}

const PaginationStyles = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem auto;
  ${above.medium`
    max-width: 900px;
  `}
  li {
    font-size: 2em;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.elements.headline};
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
    }
  }
`

const Paginate: React.FC<PaginateProps> = ({ paginate, postsPerPage, totalPosts }) => {
  const m = Math.ceil(totalPosts / postsPerPage)
  const postPages = Array.from({ length: m }, (_, i) => i + 1)

  return (
    <PaginationStyles>
      {postPages.map((n) => (
        <li key={n} onClick={() => paginate(n)}>
          {n}
        </li>
      ))}
    </PaginationStyles>
  )
}
export default Paginate
