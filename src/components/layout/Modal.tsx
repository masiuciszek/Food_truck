import * as React from 'react';
import './modal.css';

interface Props {
  content: any;
  show: boolean;
  close: () => void;

}

const Modal: React.FC<Props> = ({ content, close, show }) => {
  let a;
  return (
    <div className="modal">
      {' '}
      <div className="modalBox">{content}</div>
      <div className="modalBg" onClick={close} />
    </div>
  );
};
export default Modal;
