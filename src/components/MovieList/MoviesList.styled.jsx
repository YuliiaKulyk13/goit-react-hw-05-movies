import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MovieItem = styled.li`
  display: flex;
  width: 220px;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const ImgWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5px;
  width: 200px;
  height: 300px;
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 4px 4px 10px black;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  padding: 0 6px;
  text-align: center;
  color: black;
  border-bottom: none;
  :hover {
    color: #44a9ed;
  }
`;
