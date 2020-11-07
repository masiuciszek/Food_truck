import React from "react"
import { useStoreState } from "../../context/storeState/StoreProvider"
import { renderStores } from "../../utils/render_helpers"
import { Grid } from "../styled/wrappers"

const StoreContainer: React.FC = () => {
  const { stores } = useStoreState()

  return (
    <Grid
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      {renderStores(stores)}
    </Grid>
  )
}
export default StoreContainer
