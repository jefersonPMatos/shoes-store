import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.button`
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  font-size: ${(props) => props.fs || "39px"};
  font-weight: 600;
  border: 0;
  transition: all 0.4s ease;
  width: ${(props) => props.w || "403px"};
  height: ${(props) => props.h || "99px"};
  ${(props) => {
    if (props.secondary) {
      return css`
        background: #dcbb99;
        color: #000;
        border: 1px solid #000;
        &:hover {
          background-color: #b99d81;
        }
      `;
    } else {
      return css`
        background: #c2185b;
        color: #fff;
        &:hover {
          background-color: #a7144f;
        }
      `;
    }
  }}
`;

export { Container };
