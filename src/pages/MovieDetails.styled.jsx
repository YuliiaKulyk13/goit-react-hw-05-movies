import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const AdditionalList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 20px;
  list-style: none;
  text-decoration: none;
`;
export const ItemLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #3885e4;
  &.active {
    background-color: #dfd357;
  }
`;
