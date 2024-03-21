import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(3, 1fr) 100px;
  background-color: #1d1d20;
  width: 100%;
  max-width: 90vw;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  transition-duration: 300ms;
  list-style: none;
  transform: scale(1);

  &:hover {
    transform: scale(1.01);
    background-color: #17171a;
  }
`;

export const Bullet = styled.div`
  width: 30px;
  height: 30px;
  background-color: #58bf06;
  border-radius: 50%;
`;
export const WrapperField = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  span {
    color: #e7e7e79d;
    font-size: 12px;
    font-weight: 300;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Description = styled.div`
  color: #e7e7e79d;
  font-size: 14px;
  font-weight: 300;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  cursor: pointer;
  opacity: 0.8;
  &.trash {
    color: #fd5d5c;
  }
  &:hover {
    opacity: 1;
  }
`;
