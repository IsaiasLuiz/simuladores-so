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

const Label = styled.label`
  display: block;
  border: 1px solid #123;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: #df2f12;
  }
`;

export { Container, Content, Title, Label };
