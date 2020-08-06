import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store";
import { selectStores } from "src/store/store/store.selectors";
import styled from "styled-components";
import StoreItem from "./Store.item";

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row: auto;
  margin: 1rem auto 5rem auto;
  /* grid-auto-rows: 150px; */
  /* grid-auto-flow: row dense; */
`;

const Stores = () => {
  const stores = useSelector((state: AppState) => selectStores(state));

  console.log(stores);
  return (
    <Grid>
      {stores.map((store) => (
        <StoreItem key={store._id} store={store} />
      ))}
    </Grid>
  );
};
export default Stores;
