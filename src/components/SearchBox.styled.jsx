import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  font: inherit;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 4px;

  justify-content: center;
  border: none;
  text-decoration: none;
  background-color: #3885e4;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #dfd357;
    color: white;
  }
`;
