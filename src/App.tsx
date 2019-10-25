import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import AddLog from './components/logs/AddLog';
import './App.css';
import Logs from './components/logs/Logs';
import AppLayout from './components/layout/AppLaout';
import LogProvider from './context/logs/Logs.state';
import TechProvider from './context/techs/Techs.state';
import Techs from './components/techs/Techs';
import Modal from './components/layout/Modal';


const App: React.FC = () => {
  const [addLog, setAddLog] = React.useState(false);

  const handleToggle = () => {
    setAddLog(!addLog);
  };

  let contentForAddLog;
  if (addLog) {
    contentForAddLog = <AddLog close={handleToggle} />;
  }

  return (
    <LogProvider>
      <TechProvider>
        <AppLayout>
          {addLog ? <Modal close={handleToggle} show={addLog} content={contentForAddLog} /> : null}
          <main className="App">
            <Logs />
            <div className="btns">
              <button onClick={handleToggle}>add a new log</button>
            </div>
          </main>
        </AppLayout>
      </TechProvider>
    </LogProvider>

  );
};
export default App;
