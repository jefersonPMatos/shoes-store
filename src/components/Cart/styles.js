import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  width: 350px;
  height: auto;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.p`
  display: flex;
  justify-content: start;
  font-size: ${(props) => props.fs || "14px"};
`;

const P = styled.p`
  align-self: left;
  font-size: ${(props) => props.fs || "14px"};
`;

export { Container, Img, P, Title };
