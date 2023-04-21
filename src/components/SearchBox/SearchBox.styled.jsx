import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 600px;
  height: 50px;
  position: relative;
  margin-bottom: 16px;
  max-width: 100%;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 60%;
  height: 70%;
  padding: 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 15px;
  letter-spacing: 2px;

  /* height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  font: inherit; */
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
