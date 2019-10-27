import * as React from 'react';
import { TechStore } from '../../context/techs/Techs.state';
import TechItem from './TechItem';

interface Props {
  close: () => void;
}

const Techs: React.FC<Props> = ({ close }) => {
  const { getTechs, techs, loading } = React.useContext(TechStore);

  React.useEffect(() => {
    getTechs();
  }, []);


  return (
    <>
      <div className="techs">
        {!loading && techs.length > 0 ? techs.map((tech: Tech) => <TechItem key={tech.id} tech={tech} />) : <p>loading...</p> }
      </div>

    </>
  );
};
export default Techs;
