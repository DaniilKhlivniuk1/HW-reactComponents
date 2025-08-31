import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 32px;
`;

export const Btn = styled.button`
  font-size: 16px;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;

  /* разные цвета для разных кнопок */
  &#good-btn {
    background-color: #2e7d32;
  }
  &#good-btn:hover {
    background-color: #1b5e20;
  }

  &#neutral-btn {
    background-color: #f9a825;
  }
  &#neutral-btn:hover {
    background-color: #f57f17;
  }

  &#bad-btn {
    background-color: #c62828;
  }
  &#bad-btn:hover {
    background-color: #8e0000;
  }
`;
