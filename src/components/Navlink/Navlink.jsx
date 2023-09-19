import PropTypes from "prop-types"; // ES6

const Navlink = ({ route }) => {
  return (
    <>
      <li className="font-semibold tracking-widest rounded-lg p-2 ">
        <a href={route.path}>{route.title}</a>
      </li>
    </>
  );
};

Navlink.propTypes = {
  route: PropTypes.object,
};

export default Navlink;
