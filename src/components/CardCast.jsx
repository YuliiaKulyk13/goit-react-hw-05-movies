import defaultActor from '.././defaultActor/defaultActor.png';
import { CastCardItem, CastCardName, CastContainer } from './CardCast.styled';

const CardCast = ({ cast }) => {
  const imgURL = 'https://image.tmdb.org/t/p/w200';
  return (
    <CastContainer>
      {cast &&
        cast.map(({ character, id, original_name, profile_path }) => {
          return (
            <CastCardItem key={id}>
              <img
                src={profile_path ? `${imgURL}${profile_path}` : defaultActor}
                alt={original_name}
                height="200"
              />

              <CastCardName>Name: {original_name}</CastCardName>
              <CastCardName>Character: {character}</CastCardName>
            </CastCardItem>
          );
        })}
    </CastContainer>
  );
};

export default CardCast;
