import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/styled/Buttons";
import { generateNameSlug } from "../utils/helperFn";
import {
  FormGroup,
  FormLabel,
  FormInput,
} from "../../components/styled/FormElements";
import { above, below, handleFlex } from "./helpers";
import { Dispatch } from "../../context/authState/AuthType";
import StoreItem from "../../components/store/StoreItem";

type FormSubmitEventType = (evt: React.FormEvent<HTMLFormElement>) => void;
type HandleChangeType = (evt: React.ChangeEvent<HTMLInputElement>) => void;

export const renderForm = (isLoginForm: boolean) => (
  formData: FormDataType
) => (handleChange: HandleChangeType) => {
  return !isLoginForm ? (
    <>
      <FormGroup>
        <FormLabel>
          <span>firstname</span>
          <FormInput
            type="text"
            placeholder="firstname"
            name="firstName"
            onChange={handleChange}
            value={"firstName" in formData ? formData.firstName : ""}
          />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>lastname</span>
          <FormInput
            type="text"
            placeholder="lastname"
            name="lastName"
            onChange={handleChange}
            value={"lastName" in formData ? formData.lastName : ""}
          />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={"email" in formData ? formData.email : ""}
          />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={"password" in formData ? formData.password : ""}
          />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>confirm password</span>
          <FormInput
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={
              "confirmPassword" in formData ? formData.confirmPassword : ""
            }
          />
        </FormLabel>
      </FormGroup>
    </>
  ) : (
    <>
      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormLabel>
      </FormGroup>
    </>
  );
};

const StyledAuthActionsLargeScreen = styled.div`
  flex-basis: 40%;
  ${handleFlex("row", "space-around", "center")}
  height: 6rem;
  a {
    margin: 0 0.5rem;
  }
  ${above.medium`
    flex-basis: 20%;
  `}

  ${below.medium`
    display: none;
  `}
`;
const StyledAuthActionsSmallScreen = styled.div`
  width: 100%;
  ${handleFlex("row", "space-around", "center")};
`;

export const renderAuthElements = (
  isOnSmallScreen: boolean,
  isLoggedIn: boolean,
  user: User | null,
  dispatch: Dispatch
) => {
  return !isOnSmallScreen ? (
    <StyledAuthActionsLargeScreen>
      {isLoggedIn ? (
        <>
          <Link href="/login">
            <a>
              <Button>
                {user
                  ? generateNameSlug(user.firstName, user.lastName)
                  : "name"}
              </Button>
            </a>
          </Link>
          <span>
            <a>
              <Button onClick={() => dispatch({ type: "LOGOUT_USER" })}>
                Logout
              </Button>
            </a>
          </span>
        </>
      ) : (
        <>
          <Link href="/login">
            <a>
              <Button>Login</Button>
            </a>
          </Link>

          <Link href="/register">
            <a>
              <Button>Register</Button>
            </a>
          </Link>
        </>
      )}
    </StyledAuthActionsLargeScreen>
  ) : (
    <StyledAuthActionsSmallScreen>
      <Link href="/login">
        <a>
          <Button bgColor textColor>
            Login
          </Button>
        </a>
      </Link>

      <Link href="/register">
        <a>
          <Button bgColor textColor>
            Register
          </Button>
        </a>
      </Link>
    </StyledAuthActionsSmallScreen>
  );
};

export const renderStores = (stores: Store[]) => {
  return stores.length > 0 ? (
    stores.map((store) => <StoreItem key={store.id} store={store} />)
  ) : (
    <h3>No Stores</h3>
  );
};
