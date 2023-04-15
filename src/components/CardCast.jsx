import defaultActor from '.././defaultActor/defaultActor.png';

const CardCast = ({ cast }) => {
  const imgURL = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      {cast &&
        cast.map(({ character, id, original_name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? `${imgURL}${profile_path}` : defaultActor}
                alt={original_name}
                height="200"
              />
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </div>
  );
};

export default CardCast;
