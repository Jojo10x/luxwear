
const RandomReview = ({ reviews }) => {
  const getRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  };

  const review = getRandomReview();

  return (
    <div className="rate-comment" key={review.rating}>
      <span>{review.name}</span>
      <span>{review.rating} (rating)</span>
      <p>{review.text}</p>
    </div>
  );
};

export default RandomReview;

