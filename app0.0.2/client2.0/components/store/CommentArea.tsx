import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface CommentAreaProps {
  on: boolean;
}

const StyledCommentArea = styled(motion.section)``;

const CommentArea: React.FC<CommentAreaProps> = ({ on }) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <StyledCommentArea
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      exit="closed"
      transition={{ damping: 100 }}>
      {/* form */}
      {/* comments */}
      <h3>Comments</h3>
    </StyledCommentArea>
  );
};
export default CommentArea;
