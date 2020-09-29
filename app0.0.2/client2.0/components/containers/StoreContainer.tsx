import React from "react";
import { useStoreState } from "../../context/storeState/StoreProvider";
import { renderStores } from "../../src/utils/render_helpers";
import { Grid } from "../styled/wrappers";

interface StoreContainerProps {}

const StoreContainer: React.FC<StoreContainerProps> = ({}) => {
  const { stores } = useStoreState();

  return <Grid>{renderStores(stores)}</Grid>;
};
export default StoreContainer;
