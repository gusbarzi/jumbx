import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Helvetica Neue', 'Arial', 'Sans-Serif';
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ContainerApp = styled.div`
  padding-top: 60px;

  background-repeat: repeat;
  background-size: cover;
`;
