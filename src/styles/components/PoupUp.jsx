import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ color }) => color ?? "red"};
`;
