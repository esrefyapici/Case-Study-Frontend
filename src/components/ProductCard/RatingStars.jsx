import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
const RatingStars = ({ score }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500 text-sm">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={`full-${i}`}><IoIosStar /></span>
        ))}
      {hasHalfStar && <span><IoIosStarHalf /></span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={`empty-${i}`}><IoIosStarOutline /></span>
        ))}
      <span className="font-avenirbook text-[14px] text-black ml-1">
        {score.toFixed(1)}/5
      </span>
    </div>
  );
};

export default RatingStars;
