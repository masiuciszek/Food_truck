import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { useStoreState } from "../../context/storeState/StoreProvider"
import { below, handleFlex } from "../../src/utils/helpers"
import FilteredStoreItem from "./FilteredStoreItem"

const StyledStoreBox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  ${handleFlex("row", "center", "center")};
  z-index: 1;
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.illustrations.main};
  padding: 1em 1.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 28em;
  height: 24em;
  overflow-y: scroll;
  ${handleFlex("column", "center", "center")};
  ${below.small`
    width: 100%;
  `}
`

const FilteredStoresBox = () => {
  const { filteredStores } = useStoreState()
  const [state, setState] = useState<Store[] | []>(() => [])

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  React.useEffect(() => {
    setState(filteredStores)
  }, [filteredStores.length])

  return (
    <StyledStoreBox
      initial="closed"
      animate={filteredStores.length ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8 }}>
      <Wrapper>
        {state.length &&
          (state as Array<Store>).map((store) => (
            <FilteredStoreItem key={store._id} store={store} />
          ))}
      </Wrapper>
    </StyledStoreBox>
  )
}
export default FilteredStoresBox
