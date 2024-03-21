import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 350px;
  min-height: 300px;
`;

export const Blur = styled.div`
  background-color: black;
  filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

export const PoupUp = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
  width: 350px;
  min-height: 300px;
  background-color: #1d1d20;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 2;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  .wrapper-inputs {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  margin-top: 20px;
  span {
    font-size: 22px;
    font-weight: 700;
  }
`;
export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Cancel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  color: #fd5d5c;
  text-align: center;
  padding: 15px;
  border-radius: 4px;
  p {
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;
export const Button = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 4px;
  background-color: #58bf06;
  cursor: pointer;
  transition-duration: 500ms;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
