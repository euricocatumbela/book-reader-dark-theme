import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <Label>
      <Input type="checkbox" />
      <Span></Span>
    </Label>
  );
};

export default Switch;
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  /* background: red; */
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const Span = styled.span`
  width: 60px;
  height: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: white;
    transition: 0.4s;
    :checked {
      transform: translateX(26px);
    }
  }
`;
