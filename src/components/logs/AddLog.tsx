import * as React from 'react';
import { LogsStore } from '../../context/logs/Logs.state';
import TechSelect from '../layout/TechSelect';

interface Props {
  close: () => void;
}


const AddLog: React.FC<Props> = ({ close }) => {
  const { addLog } = React.useContext(LogsStore);
  const [message, setMessage] = React.useState('');
  const [attention, setAttention] = React.useState<any | boolean>(false);
  const [tech, setTech] = React.useState('');

  return (
    <div className="addlog">
      <span onClick={close} id="close-modal" style={{ float: 'right' }}>❌</span>
      <h4>Add log</h4>
      <form onSubmit={(e) => {
        if (message === '' || tech === '') {
          alert('please fill in the fileds');
          close();
        }
        e.preventDefault();
        const newLog = {
          message, attention, tech, date: new Date(),
        };
        addLog(newLog);
        close();
      }}
      >
        <input type="text" placeholder="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

        <input
          type="checkbox"
          checked={attention}
          value={attention}
          onChange={(e) => setAttention(!attention)}
        />
        <span>Needs Attention</span>

        <select
          name="tech"
          value={tech}
          className="browser-default"
          onChange={(e) => setTech(e.target.value)}
        >
          <option disabled value="">Choose a tech</option>
          <TechSelect />
        </select>
        <button className="btn-one" type="submit">Submit</button>
      </form>

      {' '}
    </div>
  );
};
export default AddLog;
