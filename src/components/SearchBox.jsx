export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="movieName"
          autoComplete="off"
          value={value}
          placeholder="Search movies"
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
