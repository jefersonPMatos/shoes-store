import styled from "styled-components";

const Banner = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  color: #fff;
`;

const Img = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 0.5s ease;
  &:hover {
  /* cursor: pointer; */
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  }
`;

export { Banner, H2, Img };
