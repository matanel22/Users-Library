import React from "react";
import styled from "styled-components";

interface OvalButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const OvalButton = ({ onClick, children }: OvalButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  width: 30%;
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  :hover {
    cursor: pointer;
    background-color: #71ec60;
  }
`;

export default OvalButton;
