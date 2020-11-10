import React from "react"
import styled from "styled-components"
import Link from "next/link"

interface FilteredStoreItemProps {
  store: Store
}

const StyledStore = styled.strong`
  transition: 400ms ease-in-out;
  color: ${({ theme }) => theme.colors.illustrations.highlight};
  display: block;
  padding: 0.4em;
  font-size: 1.3em;
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.illustrations.highlight};
  &:hover {
    color: ${({ theme }) => theme.colors.illustrations.main};
    text-shadow: 2px 2px 3px #333;
    border-color: ${({ theme }) => theme.colors.illustrations.secondary};
  }
`

const FilteredStoreItem: React.FC<FilteredStoreItemProps> = ({ store }) => {
  return (
    <Link href="/stores/store/[slug]" as={`/stores/store/${store.slug}`}>
      <a data-testid="filtered-store-item">
        <StyledStore>{store.name}</StyledStore>
      </a>
    </Link>
  )
}
export default FilteredStoreItem
