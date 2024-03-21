import styled from "styled-components";

export const Container = styled.div`
  background-color: #2E2E32;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;
export const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.div`
  background-color:  #1763F8;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  padding: 5px 15px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover{
    background-color: #1150cc;
  }
`

