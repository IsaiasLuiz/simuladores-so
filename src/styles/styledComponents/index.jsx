import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  border: 1px solid green;
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  display: block;
`;

export { Container, Content, Title };
