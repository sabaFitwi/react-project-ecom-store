import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function createStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color={i <= fullStars ? "gold" : "gray"} />);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(
      <FaStarHalfAlt
        key={fullStars + i}
        color={i <= fullStars ? "gold" : "gray"}
      />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar
        key={fullStars + halfStars + i}
        color={i <= fullStars ? "gold" : "gray"}
      />
    );
  }

  return (
    <>
      {stars.map((star) => (
        <span key={Math.random()}>{star}</span>
      ))}
    </>
  );
}
