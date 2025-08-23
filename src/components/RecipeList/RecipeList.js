import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  list-style: none;
`;