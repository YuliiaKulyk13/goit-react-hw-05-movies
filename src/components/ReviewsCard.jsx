const ReviewsCard = ({ reviews }) => {
  return (
    <div>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Review: {content}</p>
            </li>
          );
        })}
    </div>
  );
};
export default ReviewsCard;
