import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: #eeeaea;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #3885e4;
  &.active {
    background-color: #e6d738;
  }
`;
