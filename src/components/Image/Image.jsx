import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";
import "./Image.css";

const Image = ({ URLImage, type }) => (
  <img
    className={classNames("image", {
      [`type-${type}`]: type,
    })}
    src={URLImage}
    alt={type}
  />
);

Image.propTypes = {
  URLImage: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types).isRequired,
};

export default Image;
