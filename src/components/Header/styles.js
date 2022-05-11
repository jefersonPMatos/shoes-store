import styled from "styled-components";

const Container = styled.header`
  padding: 34px 40px;
  font-size: 24px;
  font-weight: 600;
  color: #777777;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  list-style: none;
  &:hover {
    color: #333333;
  }
`;

const Logo = styled.img`
  width: 176px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  margin-right: 30px;
  &::not(::last-child) {
    margin-right: 30px;
  }
`;

export { Container, Link, Logo, List, ListItem };
