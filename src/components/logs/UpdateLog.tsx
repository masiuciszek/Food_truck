import * as React from 'react';
import { LogsStore } from '../../context/logs/Logs.state';

interface Props {
  close: () => void;
}


const UpdateLog: React.FC<Props> = ({ close }) => {
  const { updateLog, setCurrent } = React.useContext(LogsStore);
  const [message, setMessage] = React.useState('');
  const [attention, setAttention] = React.useState<any | boolean>(false);
  const [tech, setTech] = React.useState('');

  React.useEffect(() => {
    if (setCurrent) {
      setMessage(setCurrent.message);
      setAttention(setCurrent.attention);
      setTech(setCurrent.tech);
    }
  }, [setCurrent]);

  return (
    <div className="updateLog">
      <span onClick={close} id="close-modal" style={{ float: 'right' }}>❌</span>
      <h4>UpdateLog</h4>
      <form onSubmit={(e) => {
        e.preventDefault();
        const updatedLog = {
          id: setCurrent.id,
          message,
          attention,
          tech,
          date: new Date(),
        };
        updateLog(updatedLog);
        alert(`log got updated by ,${tech}`);

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
          <option value="John Doe">John Doe</option>
          <option value="Sam Smith">Sam Smith</option>
          <option value="Sara Wilsons">Sara Wilson</option>
        </select>
        <button className="btn-one" type="submit">Submit</button>
      </form>

      {' '}
    </div>
  );
};
export default UpdateLog;
