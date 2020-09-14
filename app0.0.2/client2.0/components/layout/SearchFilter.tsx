import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";

const SearchFilterWrapper = styled.div`
  ${handleFlex("row", "center", "center")};
  flex: 1;
  border: 2px solid white;
  height: 6rem;
`;
const SearchFilterElement = styled.input``;

const SearchFilter = () => {
  return (
    <SearchFilterWrapper>
      <SearchFilterElement type="text" />
    </SearchFilterWrapper>
  );
};
export default SearchFilter;
