import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 700;
  .subtitle {
    font-size: 12px;
    max-width: 45%;
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
