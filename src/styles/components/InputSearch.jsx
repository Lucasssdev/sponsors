import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 150px;
  padding: 10px 0px 10px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all 0.2s ease-in-out;
  outline: none;
  opacity: 0.8;
  background-color: #131314;
  color: white;
  caret-color: white; /* Cor do cursor */

  &:focus {
    opacity: 1;
    width: 250px;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
`;
