import React from "react";
import { useDispatch } from "react-redux";
import { addObject, totalPrice } from "../redux/reducers/CardSlice";

const Product = ({ prd }) => {
  const dispatch = useDispatch();

  const addToHome = () => {
    if (
      prd &&
      prd.id &&
      prd.title &&
      prd.description &&
      prd.category &&
      prd.price
    ) {
      dispatch(totalPrice(prd.price));

      const qty = prd.qty || 1;

      dispatch(addObject({ ...prd, qty }));
    }
  };

  return (
    <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 max-sm:w-full h-[480px] border-2 bg-gray-600 hover:border-indigo-600 duration-700 m-2 p-1 space-y-1 shadow-md shadow-gray-300 rounded-md flex flex-col items-center">
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        className="object-cover h-[250px] w-full"
        src={prd?.image}
        alt=""
      />
      <div className="font-bold">{prd?.category}</div>
      <div className="h-12">{(prd?.title).substring(0, 27)}...</div>
      <div className="opacity-70 h-10">
        {(prd?.description).substring(0, 24)}...
      </div>
      <div className="font-bold text-lg">{prd?.price} $</div>
      <button
        onClick={addToHome}
        className="font-bold w-full h-12 bg-blue-600 hover:bg-blue-700 duration-500 rounded-lg"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
