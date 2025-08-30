import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 48px;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid #c62828;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  margin-left: 8px;

  &:focus {
    border-color: #b71c1c;
  }
`;

export const Button = styled.button`
  background: #c62828;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  margin-left: 12px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    background: #b71c1c;
  }
`;
