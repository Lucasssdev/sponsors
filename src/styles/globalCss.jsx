import styled from "styled-components";

export const Container = styled.div`
  background-color: #131314;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 50px;
  }
`;
