import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  //margin: 50px auto;
  width: 100%;
  color: white;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #bcbcbc9d;
  transition: all 0.3s ease;
  pointer-events: none;
  &.inFocus {
    top: -20px;
    font-size: 16px;
    color: #fff;
  }
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: white;
  transform: scaleX(0);
  transition: all 0.3s ease;
  &.inFocus {
    transform: scaleX(1);
  }
`;
export const Input = styled.input`
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #bcbcbc9d;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  color: white;
`;
