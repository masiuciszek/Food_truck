import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Card from './components/layout/Card';
import './App.css';
import Logs from './components/logs/Logs';
import AppLayout from './components/layout/AppLaout';
import LogProvider from './context/logs/Logs.state';
import TechProvider from './context/techs/Techs.state';
import Techs from './components/techs/Techs';
import Modal from './components/layout/Modal';


const App: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  let content;
  if (toggle) {
    content = <Card close={handleToggle} />;
  }

  return (
    <LogProvider>
      <TechProvider>
        <AppLayout>
          {toggle ? <Modal close={handleToggle} show={toggle} content="apa" /> : null}
        <main className="App">

            <Logs />
            <Techs />
            <button onClick={handleToggle}>Show</button>
          </main>
      </AppLayout>
      </TechProvider>
    </LogProvider>

  );
};
export default App;
