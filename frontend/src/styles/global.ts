import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const FormCard = styled.div`
  width: 600px;
  height: 700px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }


  body {
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }

  html, body {
    height: 100%;
  }


  button {
    cursor: pointer;
    outline: none;
  }
 
  input { 
    outline: none;
  }

  ul {
    list-style: none;
  }

  @font-face {
    font-family: 'Montserrat', sans-serif !important;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
}


`;

export { GlobalStyle, FormCard };
