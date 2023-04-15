import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemList = styled.ul`
  padding: 10px;
  line-height: 1.3;
  list-style: none;
`;

export const ItemLink = styled(Link)`
  font-size: 15px;
  color: #5098ea;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #dfd357;
  }
`;
