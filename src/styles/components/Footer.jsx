import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0a0a0a;
  color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 96vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #bcbcbc9d;
  padding: 0 30px;
  border-top: solid 20px #131314;
`;

export const FooterText = styled.p`
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;
