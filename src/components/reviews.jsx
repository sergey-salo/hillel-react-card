import React from "react";
import iconReview from "../images/icons/icon-review.svg";
import iconStar from "../images/icons/icon-star.svg";
import iconStarFilled from "../images/icons/icon-star-filled.svg";
import iconStarFilled_02 from "../images/icons/icon-star-filled-02.svg";
import iconStarFilled_04 from "../images/icons/icon-star-filled-04.svg";
import iconStarFilled_06 from "../images/icons/icon-star-filled-06.svg";
import iconStarFilled_08 from "../images/icons/icon-star-filled-08.svg";

const Reviews = (props) => {
  const renderStar = (iconSRC, index) => <img key={index} className="reviews__star" src={iconSRC} alt="star" />;

  const renderStars = (mark) => {
    const filledStars = Math.floor(mark);
    const residue = Number((mark - filledStars).toFixed(2));

    const images = [];
    for (let i = 0; i < 5; i++) {
      let icon = iconStar;

      if (i < filledStars) {
        icon = iconStarFilled;
      }

      if (i === filledStars && residue > 0) {
        if (residue <= 0.2) {
          icon = iconStarFilled_02;
        } else if (residue <= 0.4) {
          icon = iconStarFilled_04;
        } else if (residue <= 0.6) {
          icon = iconStarFilled_06;
        } else {
          icon = iconStarFilled_08;
        }
      }

      images.push(renderStar(icon, i));
    }

    return images;
  };

  const renderAmountComment = (amount) => <span className="reviews__comment">{getReviewComment(amount)}</span>;

  const renderReviewsStars = (comments) => {
    const { mark, amount } = comments;

    return (
      <div className="reviews__stars">
        {renderStars(mark)}
        {renderAmountComment(amount)}
      </div>
    );
  };

  const renderReviews = (comments) => {
    if (comments) {
      return renderReviewsStars(comments);
    }

    return (
      <>
        <img src={iconReview} alt="reviews-question-icon" />
        <span className="reviews__comment">Залишити відгук</span>
      </>
    );
  };

  return <div className="reviews">{renderReviews(props.comments)}</div>;
};

export default Reviews;

function getReviewComment(number) {
  const result = `${number} відгук`;
  let n = Math.abs(number);

  n %= 100;

  if (n >= 5 && n <= 20) {
    return result + "ів";
  }

  n %= 10;

  if (n === 1) {
    return result;
  }

  if (n >= 2 && n <= 4) {
    return result + "и";
  }

  return result + "ів";
}
