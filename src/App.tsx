import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';


import './App.css';
import { LogsStore } from './context/logs/Logs.state';

const App: React.FC = () => {
  const { getLogs, logs } = React.useContext(LogsStore);
  console.log(logs);

  React.useEffect(() => {
    getLogs();
  }, []);
  return (
    <div className="App">
      <h1>Apa</h1>
    </div>
  );
};

export default App;
