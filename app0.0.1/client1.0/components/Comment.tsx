import * as React from "react";
import styled from "styled-components";
import { Btn } from "./styles/Btns";
import { FormGroup, FormStyles, Input } from "./styles/Form.elements";
import { handleFlex } from "./styles/Helpers";

interface Props {
  onComment: string;
  onSetComment: React.Dispatch<React.SetStateAction<string>>;
  onHandleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const CommentStyles = styled.section`
  padding: 2rem 1rem;
  ${handleFlex("column", "center", "center")}
`;

const Comment = ({ onComment, onSetComment, onHandleSubmit }: Props) => {
  return (
    <CommentStyles>
      <FormStyles onSubmit={onHandleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="text"
            placeholder="...comment"
            value={onComment}
            onChange={(e) => onSetComment(e.target.value)}
          />
        </FormGroup>
        <Btn type="submit">Leave comment...</Btn>
      </FormStyles>
    </CommentStyles>
  );
};
export default Comment;
