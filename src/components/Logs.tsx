import * as React from 'react';
import { LogsStore } from '../context/logs/Logs.state';

interface Props {

}

const Logs: React.FC<Props> = () => {
  const {
    getLogs, logs, techs, getTechs,
  } = React.useContext(LogsStore);

  console.log(logs);
  console.log(techs);

  React.useEffect(() => {
    getLogs();
    getTechs();
  }, []);


  return (
    <>
      {logs && logs.length > 0 ? logs.map((log: Record<string, any>) => <li key={log.id}>{log.message}</li>) : <h3>...Loading</h3> }
    </>
  );
};
export default Logs;
