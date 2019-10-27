import * as React from 'react';
import { TechStore } from '../../context/techs/Techs.state';

interface Props {
  tech: Tech;
}

const TechItem: React.FC<Props> = ({ tech }) => {
  const { deleteTech } = React.useContext(TechStore);
  const { id, firstName, lastName } = tech;
  return (
    <>
      <li>
      #ID
        {' '}
        {id}
        {' '}
        {' '}
        {firstName}
        {' '}
        {lastName}
        <span className="delete" onClick={() => deleteTech(id)}>🗑</span>
      </li>
    </>

  );
};
export default TechItem;
