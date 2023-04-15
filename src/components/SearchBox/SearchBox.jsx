import { Form, Input, SearchButton } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="movieName"
          autoComplete="off"
          value={value}
          placeholder="Search movies"
          onChange={onChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </div>
  );
};
