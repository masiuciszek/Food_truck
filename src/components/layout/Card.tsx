import * as React from 'react';

interface Props {
  close: () => void;
}

const Card: React.FC<Props> = ({ close }) => {
  let a;
  return (<div onClick={close}> LegiaCwks1916! </div>);
};
export default Card;
