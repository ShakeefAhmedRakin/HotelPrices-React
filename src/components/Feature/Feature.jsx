import PropTypes from "prop-types"; // ES6
import { GiCheckMark } from "react-icons/gi";

const Feature = ({ feature }) => {
  return (
    <>
      <li className="flex gap-2">
        <GiCheckMark className="mt-1"></GiCheckMark>
        {feature}
      </li>
    </>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
