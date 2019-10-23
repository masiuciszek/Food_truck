import * as React from 'react';
import './logItem.css';

interface Props {
  log: Logs;
}

const LogItem: React.FC<Props> = ({ log }) => {
  const {
    message, attention, tech, date, id,
  } = log;

  const formatDate = date.split('-').slice(0, 2).join(' ');

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
        <span className="trash">
            🗑
        </span>
      </li>
    </>
  );
};
export default LogItem;
