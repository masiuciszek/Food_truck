/* eslint-disable react/prop-types */
import * as React from 'react';
import './logItem.css';
import { LogsStore } from '../../context/logs/Logs.state';


interface Props {
  log: Logs;
  toggleEditLog: () => void;
}

const LogItem: React.FC<Props> = ({ log, toggleEditLog }) => {
  const { deleteLog, handleCurrent } = React.useContext(LogsStore);

  const {
    message, attention, tech, date, id,
  } = log;

  const formatDate = date.split('-').slice(0, 2).join(' ');

  const handleEdit = () => {
    handleCurrent(log);
    toggleEditLog();
  };

  return (
    <>
      <li className="logItem">
        <span style={{ color: attention ? 'red' : 'steelblue' }}>
          {message}
          {' '}
        </span>
        <br />
        <span>
            Created by Tech: #
          {id}
          {' '}
          {tech}
          {' '}
          {formatDate}
          {' '}
        </span>
        <span className="edit" onClick={handleEdit}>
            🥑
        </span>
        <span className="trash" onClick={() => deleteLog(id)}>
            🗑
        </span>
      </li>
    </>
  );
};


export default LogItem;
