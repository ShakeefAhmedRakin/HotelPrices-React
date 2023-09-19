import { useState, useEffect } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("/hotel.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <>
      <h2 className="text-center my-4 text-2xl font-bold">Available Rooms</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {options.map((option) => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceOptions;
