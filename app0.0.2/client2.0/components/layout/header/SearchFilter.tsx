import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStoreDispatch } from "../../../context/storeState/StoreProvider"
import { above, below } from "../../../utils/helpers"

interface Props {
  showFilerSearch: boolean
}

const SearchFilterWrapper = styled(motion.div)`
  flex: 1;
  position: fixed;
  width: 70%;
  padding: 1rem;
  z-index: 2;
  ${below.small`
    width: 85%;
  `}
`

const SearchFilterElement = styled.input`
  border: 3px solid ${({ theme }) => theme.colors.elements.headline};
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: 0;
  transition: ${(props) => props.theme.transition.quickTransition};
  display: block;
  margin: 0 auto;
  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.illustrations.highlight};
    padding: 0.45rem 0.75rem;
    ${above.small`
      width: 95%;
    `}

    ${above.medium`
      width: 75%;
    `}

    ${above.large`
      width: 70%;
    `}

    ${above.xLarge`
      width: 44rem;
    `}
  }
  ${above.small`
    width: 100%;
  `}
  ${above.medium`
    width: 80%;

  `}
  ${above.large`
    width: 75%;
  `}
  ${above.xLarge`
    width: 45rem;
  `}
`

const SearchFilter = ({ showFilerSearch }: Props) => {
  const [text, setText] = useState("")
  const [storesState, setStoreState] = useState<Store[] | []>([])
  const d = useStoreDispatch()

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const getStoresByName = async (text: string): Promise<void> => {
    const res = await fetch(`http://localhost:4000/store/filterstore?name=${text}`)
    const { data: stores } = await res.json()

    setStoreState(stores)
  }

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setText(evt.target.value)
    if (evt.target.value !== "") {
      d({ type: "SEARCH_STORE", payload: storesState })
    } else {
      d({ type: "CLEAR_SEARCH_STORE" })
    }
  }

  useEffect(() => {
    getStoresByName(text)
  }, [text])

  return (
    <SearchFilterWrapper
      initial="closed"
      animate={showFilerSearch ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      <SearchFilterElement
        type="text"
        placeholder="search store..."
        name="text"
        value={text}
        onChange={handleSearch}
      />
    </SearchFilterWrapper>
  )
}
export default SearchFilter
