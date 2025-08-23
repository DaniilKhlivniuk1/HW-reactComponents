import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #121212; /* простой темный фон */
    margin: 0;
    padding: 0;
    color: #e0e0e0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const DifficultyBox = styled.div`
  padding: 20px;
  background: #1e1e1e;
  border-radius: 6px;
  max-width: 420px;
  margin: 40px auto;
  border: 1px solid #333;
`;

export const DifficultyItem = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  background: #2a2a2a;
  color: #e0e0e0;
`;

export const Item = styled.li`
  border: ${(props) =>
      props.$difficulty === 3
        ? "#e74c3c"
        : props.$difficulty === 1
        ? "#f1c40f"
        : props.$difficulty === 0
        ? "#2ecc71"
        : "#7f8c8d"}
    2px solid;
  border-radius: 4px;
  padding: 20px;
  width: 320px;
  background: #1c1c1c;
  margin: 30px auto; /* карточки дальше друг от друга */
`;

export const Title = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
  color: #ffffff;
`;

export const DifficultyTitle = styled.h4`
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
  color: #cccccc;
`;

export const ParamList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  padding: 0;
`;

export const ParamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ParamText = styled.p`
  font-size: 13px;
  text-align: center;
  color: #aaaaaa;
`;

export const ParamSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

export const DifficultyList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 30px; /* ещё больше расстояния */
  padding: 0;
`;