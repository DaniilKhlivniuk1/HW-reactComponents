import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border: 3px solid #eee;
  border-left: 6px solid #000000ff;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 6px;
`;

export const Text = styled.p`
  color:rgb(0, 0, 0);
  font-size: 16px;
  max-width: 350px;
  text-align: left;
   word-break: break-word;
  white-space: pre-wrap;
`;


export const DeleteButton = styled.button`
  background: transparent;
  color: #000000ff;
  border: 2px solid #000000ff;
  border-radius: 50%;
  padding: 6px 8px;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #000000ff;
    color: #fff;
  }
`;
