import * as React from 'react';
import { LogsStore } from '../../context/logs/Logs.state';
import LogItem from './LogItem';
import './logs.css';


interface Props {

}

const Logs: React.FC<Props> = () => {
  const {
    getLogs, logs, loading,
  } = React.useContext(LogsStore);


  React.useEffect(() => {
    getLogs();
  }, []);


  return (
    <>
      <ul className="logs">
        {!loading && logs && logs.length > 0 ? logs.map((log: Logs) => <LogItem key={log.id} log={log} />) : <p>loading...</p> }
      </ul>
    </>
  );
};
export default Logs;
