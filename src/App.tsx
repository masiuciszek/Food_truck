import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import AddLog from './components/logs/AddLog';
import UpdateLog from './components/logs/UpdateLog';
import './App.css';
import Logs from './components/logs/Logs';
import AppLayout from './components/layout/AppLaout';
import LogProvider from './context/logs/Logs.state';
import TechProvider from './context/techs/Techs.state';
import Techs from './components/techs/Techs';
import Modal from './components/layout/Modal';
import useToggle from './hooks/useToggle';
import AddTech from './components/techs/AddTech';


const App: React.FC = () => {
  const [addLog, toggleAdd] = useToggle(false);
  const [editLog, toggleEditLog] = useToggle(false);
  const [showTechs, toggleShowTechs] = useToggle(false);
  const [addTech, toggleAddTech] = useToggle(false);


  let contentForAddLog;
  if (addLog) {
    contentForAddLog = <AddLog close={toggleAdd} />;
  }

  let contentForUpdateLog;
  if (editLog) {
    contentForUpdateLog = <UpdateLog close={toggleEditLog} />;
  }

  let techsContent;
  if (showTechs) {
    techsContent = <Techs close={toggleShowTechs} />;
  }

  let contentForAddTech;
  if (addTech) {
    contentForAddTech = <AddTech close={toggleAddTech} />;
  }

  return (
    <LogProvider>
      <TechProvider>
        <AppLayout>
          {addLog ? <Modal close={toggleAdd} show={addLog} content={contentForAddLog} /> : null}
          {addTech ? <Modal close={toggleAddTech} show={addTech} content={contentForAddTech} /> : null}
          {editLog ? <Modal close={toggleEditLog} show={editLog} content={contentForUpdateLog} /> : null}
          {showTechs ? <Modal close={toggleShowTechs} show={showTechs} content={techsContent} /> : null}
          <main className="App">
            <Logs toggleEditLog={toggleEditLog} />
            <div className="btns">
              <button className="btn-one" type="button" onClick={toggleAdd}>add a new log</button>
              <button className="btn-one" type="button" onClick={toggleShowTechs}>Techs</button>
              <button className="btn-one" type="button" onClick={toggleAddTech}>Add Tech</button>
            </div>
          </main>
        </AppLayout>
      </TechProvider>
    </LogProvider>

  );
};
export default App;
