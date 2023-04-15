import {
  ReviewsContainer,
  ReviewsDescription,
  ReviewsItem,
} from './ReviewsCard.styled';

const ReviewsCard = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <ReviewsItem key={id}>
              <ReviewsDescription>
                <b>Author: </b> {author}
              </ReviewsDescription>
              <p>
                <b>Review: </b> {content}
              </p>
            </ReviewsItem>
          );
        })}
    </ReviewsContainer>
  );
};
export default ReviewsCard;
