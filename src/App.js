import styled from "styled-components";

export const Main = styled.div`
  background: linear-gradient(135deg, #0f0f0f, #1a1a2e);
  color: #f5f5f5;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Poppins', Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  color: #000; /* теперь чёрный */
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 50px;
  color: #8e44ad; /* фиолетовый акцент */
  text-shadow: 0 0 12px rgba(142, 68, 173, 0.6);
  letter-spacing: 2px;
`;