import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: ${ props => props.justify || 'center'};
align-items: ${ props => props.align || 'center'};
`;

export { Container };