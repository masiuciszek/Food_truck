import * as React from 'react';

import { TechStore } from '../../context/techs/Techs.state';

interface Props {

}

const TechSelect: React.FC<Props> = () => {
  const { loading, techs, getTechs } = React.useContext(TechStore);

  React.useEffect(() => {
    getTechs();
  }, []);

  return (
    <>
      {!loading && techs.length > 0 ? techs.map((tech: Tech) => (
        <option value={`${tech.firstName} ${tech.lastName}`} key={tech.id}>
          {tech.firstName}
          {' '}
          {tech.lastName}
        </option>
      )) : null }
    </>
  );
};
export default TechSelect;
