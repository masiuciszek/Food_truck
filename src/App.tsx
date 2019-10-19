import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';


import './App.css';
import Logs from './components/Logs';
import AppLayout from './components/layout/AppLaout';


const App: React.FC = () => (
  <AppLayout>
    <div className="App">
      <h1>Apa</h1>
      <Logs />
    </div>
  </AppLayout>

);

export default App;
