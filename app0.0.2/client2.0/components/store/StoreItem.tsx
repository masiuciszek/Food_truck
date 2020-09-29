import React from "react";

interface StoreItemProps {
  store: Store;
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  return <h1>StoreItem</h1>;
};
export default StoreItem;
