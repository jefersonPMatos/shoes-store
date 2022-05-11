import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

const Header = styled.div`
  display: flex;
  width: 260px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;

const Body = styled.div`
  flex: 1;
  background: #fff;
  font-size: 16px;
  padding: 24px 17px 20px 17px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #c2185b;
  }
`;

export { Container, Body, Header, Title };
