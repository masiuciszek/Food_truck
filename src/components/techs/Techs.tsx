import * as React from 'react';
import { TechStore } from '../../context/techs/Techs.state';

interface Props {

}

const Techs: React.FC<Props> = () => {
  const { getTechs, techs } = React.useContext(TechStore);

  React.useEffect(() => {
    getTechs();
  }, []);
  console.log(techs);
  return (
    <h1>Yechs</h1>
  );
};
export default Techs;
