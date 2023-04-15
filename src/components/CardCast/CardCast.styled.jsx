import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
`;
export const CastCardItem = styled.li`
  width: 200px;

  text-align: center;
  margin: 0 auto;
`;

export const CastCardName = styled.p`
  display: flex;
  gap: 5px;
  justify-content: baseline;
  align-items: baseline;
`;
