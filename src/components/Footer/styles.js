import styled from "styled-components";

const Container = styled.header`
  padding: 34px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  list-style: none;
  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const Paragraph = styled.p`
font-size: 14px;
`;

const H1 = styled.h1`

`;


export { Container, Link, List, ListItem, Paragraph, H1 };
