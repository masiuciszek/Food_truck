import * as React from "react";
import { useSpring, animated } from "react-spring";
import {
  FormGroup,
  FormStyles,
  Input,
  FormGroupForCheckBox,
  Label,
} from "./styles/Form.elements";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { selectUser } from "src/store/auth/auth.selectors";
import { Btn } from "./styles/Btns";
import { handleFlex } from "./styles/Helpers";
import { editMe } from "src/store/auth/auth.actions";

interface Props {
  isEdit: boolean;
  toggleEdit: Fn;
  token: string;
}

const EditFormWrapper = styled(animated.div)`
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  background: ${({ theme: { colors } }) => colors.shadowOne};
  width: 100%;
  height: 100%;
  ${handleFlex("column", "center", "center")};
  #update-title {
    color: #fff;
    text-shadow: 1px 2px 3px #333;
    font-size: 3em;
    text-transform: uppercase;
  }
`;

const EditForm = ({ isEdit, toggleEdit, token }: Props) => {
  const currentUser = useSelector((state: AppState) => selectUser(state));

  const [formData, setFormData] = React.useState<EditFormBody>({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    gender: currentUser?.gender,
  });

  const dispatch = useDispatch();

  const { y, opacity } = useSpring({
    opacity: isEdit ? 1 : 0,

    y: isEdit ? 0 : -1000,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFormData: EditFormBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      gender: formData.gender,
    };

    const userId = currentUser?._id || "";

    dispatch(editMe(updatedFormData, token, userId));
    toggleEdit();
  };

  return (
    <EditFormWrapper
      style={{
        transform: y.interpolate((y) => `translate3d(0,${y * 1}%,0)`),
      }}
    >
      <h3 id="update-title">
        {formData.firstName} {formData.lastName}
      </h3>
      <FormStyles onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroupForCheckBox>
          <Input
            type="radio"
            name="gender"
            value="FEMALE"
            id="FEMALE"
            checked={formData.gender === "FEMALE"}
            onChange={handleChange}
          />
          <Label htmlFor="FEMALE">
            <span>Female</span>
          </Label>

          <Input
            type="radio"
            name="gender"
            value="MALE"
            id="MALE"
            checked={formData.gender === "MALE"}
            onChange={handleChange}
          />
          <Label htmlFor="MALE">
            <span>Male</span>
          </Label>
        </FormGroupForCheckBox>

        <Btn type="submit">Update</Btn>
      </FormStyles>
    </EditFormWrapper>
  );
};
export default EditForm;
