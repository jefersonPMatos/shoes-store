import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.aling || "center"};
`;

export { Container };
