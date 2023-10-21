import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const RatingComponent = ({ rating, size = 80 }) => {
  return <Rating style={{ maxWidth: size }} readOnly value={rating} />;
};

RatingComponent.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
};
