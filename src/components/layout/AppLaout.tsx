import * as React from 'react';
import GlobalStyle from './GlobalStyle';

interface Props {

}

const AppLayout: React.FC<Props> = (props) => {
  let a;
  return (
    <>
      {' '}
      {props.children}
      {' '}
    </>
  );
};
export default AppLayout;
