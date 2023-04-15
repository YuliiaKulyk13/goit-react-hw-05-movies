const ReviewsCard = ({ reviews }) => {
  return (
    <div>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: </h3>
              {author}
              <h3>Review: </h3>
              {content}
            </li>
          );
        })}
    </div>
  );
};
export default ReviewsCard;
