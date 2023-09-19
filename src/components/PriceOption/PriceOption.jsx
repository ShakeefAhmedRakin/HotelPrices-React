import PropTypes from "prop-types"; // ES6
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  return (
    <>
      <div className="w-[300px] shadow-xl pt-2 px-2 pb-5 rounded-lg flex flex-col space-y-2">
        <img src={option.image} className="h-[250px] object-cover rounded-lg" />
        <h1 className="text-center font-semibold text-lg">{option.name}</h1>
        <p className="text-gray-600 px-6">{option.description}</p>
        <ul className="px-6 text-gray-600 text-sm space-y-1 flex-grow">
          {option.features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </ul>
        <h2 className="text-4xl text-center font-semibold text-gray-800 py-2">
          ${option.price_per_night}
          <span className="text-gray-600 font-thin">/night</span>
        </h2>
        <button className="btn">Book now</button>
      </div>
    </>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
