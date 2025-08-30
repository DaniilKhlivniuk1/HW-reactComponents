import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

h1, h2, h3, p {
  margin: 0;
  padding: 0;
}

ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

a:hover {
  color: #ff6ec7; /* розовый акцент */
}

button {
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
}

img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}

body {
  margin: 0;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0d001f, #1a103d);
  color: #f2f2f2;
  line-height: 1.6;
}
`;