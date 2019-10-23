import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';


import './App.css';
import Logs from './components/logs/Logs';
import AppLayout from './components/layout/AppLaout';
import LogProvider from './context/logs/Logs.state';
import TechProvider from './context/techs/Techs.state';
import Techs from './components/techs/Techs';


const App: React.FC = () => (
  <LogProvider>
    <TechProvider>
      <AppLayout>
        <main className="App">
          <Logs />
          <Techs />
        </main>
      </AppLayout>
    </TechProvider>
  </LogProvider>

);

export default App;
