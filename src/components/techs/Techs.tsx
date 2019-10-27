import * as React from 'react';
import { TechStore } from '../../context/techs/Techs.state';
import TechItem from './TechItem';
import './techs.css';

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
        <span className="close" style={{ float: 'right', cursor: 'pointer' }} onClick={close}>❌</span>
        <ul className="techs-list">
          {!loading && techs.length > 0 ? techs.map((tech: Tech) => <TechItem key={tech.id} tech={tech} />) : <p>loading...</p> }
        </ul>
        <button className="btn-one">Add A tech</button>
      </div>

    </>
  );
};
export default Techs;
