import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { useStoreState } from "../../context/storeState/StoreProvider"
import { handleFlex } from "../../src/utils/helpers"
import FilteredStoreItem from "./FilteredStoreItem"

interface FilteredStoresBoxProps {}

const StyledStoreBox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid red;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  ${handleFlex("row", "center", "center")};
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.illustrations.main};
  padding: 1em 1.5em;
`

const FilteredStoresBox: React.FC<FilteredStoresBoxProps> = ({}) => {
  const { filteredStores } = useStoreState()
  const [state, setState] = useState<Store[] | []>(() => [])

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  React.useEffect(() => {
    setState(filteredStores)
  })
  console.log(filteredStores)

  return (
    <StyledStoreBox
      initial="closed"
      animate={filteredStores.length > 0 ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8 }}>
      <Wrapper>
        {state.length > 0 ? (
          (state as Array<Store>).map((store) => (
            <FilteredStoreItem key={store._id} store={store} />
          ))
        ) : (
          <p>nooo</p>
        )}
      </Wrapper>
    </StyledStoreBox>
  )
}
export default FilteredStoresBox
