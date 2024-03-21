import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: red;
  // width: 100%;
  padding: 50px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 700;
  .subtitle {
    font-size: 12px;
    max-width: 70%;
    font-weight: 200;
    color: #e7e7e79d;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  font-size: 20px;
  margin-top: 15px;
`;
