import React from "react"

interface FilteredStoreItemProps {
  store: Store
}

const FilteredStoreItem: React.FC<FilteredStoreItemProps> = ({ store }) => {
  return (
    <>
      {" "}
      <p>{store.name}</p>
    </>
  )
}
export default FilteredStoreItem
