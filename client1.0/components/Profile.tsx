import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { deleteMe, setUserMessage } from "src/store/auth/auth.actions";
import { selectIsAuth } from "src/store/auth/auth.selectors";
import styled from "styled-components";
import Message from "./Message";
import { Btn } from "./styles/Btns";
import { handleFlex } from "./styles/Helpers";

interface Props {
  user: User | null;
  token: string;
}

const StyledProfile = styled.section`
  width: 100%;
  ${handleFlex("column", "center", "center")};
  padding: 6rem 2rem;

  p {
    font-size: 3rem;
    color: ${({ theme: { colors } }) => colors.background};
    background: ${({ theme: { colors } }) => colors.text};
    padding: 1rem;
    border-radius: 0.3rem;
    span {
      color: ${({ theme: { colors } }) => colors.button};
    }
  }
`;

const BtnGroup = styled.div`
  ${handleFlex("row", "space-evenly", "center")};
  width: 70%;
  padding: 5rem 0;
  button {
    color: #fff;
  }
`;

const Profile = ({ user, token }: Props) => {
  const date = user?.createdAt.toString().split("-");
  let yy = "";
  let mm = "";

  if (date) {
    const [year, month] = date;
    yy = year;
    mm = month;
  }

  function handleDate(date: string) {
    switch (date) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "Mars";
      case "04":
        return "April";
      case "05":
        return "Maj";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "";
    }
  }

  const random = (amount = 5) => Math.floor(Math.random() * amount);

  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppState) => selectIsAuth(state));
  const router = useRouter();

  const [confirmDelete, setConfirmDelete] = React.useState(false);

  React.useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, confirmDelete]);

  const handleDeleteMe = (): void => {
    dispatch(setUserMessage("Are you sure?"));
    if (confirmDelete) {
      dispatch(deleteMe(token));
    }
  };

  return (
    <StyledProfile>
      <p style={{ transform: `rotate(${random(3)}deg)` }}>
        {user?.firstName} <span>{user?.lastName}</span>{" "}
      </p>
      <p style={{ transform: `rotate(${random()}deg)` }}>
        Email <span>{user?.email}</span>
      </p>
      <p style={{ transform: `rotate(${random(8)}deg)` }}>
        <span>{user?.gender} </span>
      </p>
      <p style={{ transform: `rotate(${random(1)}deg)` }}>
        Created at Year <span>{yy}</span>
        <span>{handleDate(mm)}</span>
      </p>
      <BtnGroup>
        <Btn>Edit profile</Btn>
        {/* <Btn onClick={() => dispatch(deleteMe(token))}>Delete profile</Btn> */}
        <Btn onClick={handleDeleteMe}>Delete profile</Btn>
      </BtnGroup>
      <Message ctaDelete token={token} />
    </StyledProfile>
  );
};

export default Profile;
