import * as React from 'react';
import { TechStore } from '../../context/techs/Techs.state';

interface Props {
  close: () => void;
}

const AddTech: React.FC<Props> = ({ close }) => {
  const { addTech } = React.useContext(TechStore);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  return (
    <div className="add-tech">
      <span onClick={close} id="close-modal" style={{ float: 'right' }}>❌</span>
      <h4>Add Tech</h4>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '') {
          alert(' please enter all the fields!');
          setFirstName('');
          setLastName('');
        } else {
          const newTech = {
            firstName, lastName,
          };
          addTech(newTech);
          close();
        }
      }}
      >
        <input type="text" name="firstName" value={firstName} placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" name="lastName" value={lastName} placeholder="last name" onChange={(e) => setLastName(e.target.value)} />

        <button type="submit" className="btn-one">Submit</button>
      </form>
    </div>
  );
};
export default AddTech;
