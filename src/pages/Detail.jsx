import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/reducers/detailSlice";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { addObject } from "../redux/reducers/CardSlice";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const details = useSelector((state) => state.details.detailValue);

  const [counter, setCounter] = useState(1);

  const cards = useSelector((state) => state.cards.cardValue);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    const stock = details?.rating?.count;
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const addToCard = () => {
    dispatch(addObject(details, cards?.qty));
  };

  return (
    <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center w-full pt-48 pb-16 gap-4">
      <img
        className="lg:w-1/3 md:w-1/3 sm:w-full max-sm:pb-12 sm:pb-12 md:pb-0"
        src={details?.image}
        alt=""
      />
      <div className="w-2/3 flex flex-col items-center px-8 gap-4">
        <div className="font-bold text-lg">{details?.category}</div>
        <div className="text-xl">{details?.title}</div>
        <div className="opacity-60">{details?.description}</div>
        <div className="font-bold">
          Rate: {details?.rating?.rate} - Stock: {details?.rating?.count}
        </div>
        <div className="font-bold text-xl">Price: {details?.price}</div>
        <div className="flex items-center gap-8 pb-3 pt-3">
          <CgMathMinus
            onClick={decrement}
            className="cursor-pointer bg-red-500 hover:bg-red-700 duration-700 w-8 h-8 rounded-full"
            size={25}
          />
          <span>{counter}</span>
          <CgMathPlus
            onClick={increment}
            className="cursor-pointer bg-green-500 hover:bg-green-700 duration-700 w-8 h-8 rounded-full p-1"
            size={25}
          />
        </div>
        <div
          onClick={() => addToCard()}
          className="w-full bg-blue-500 cursor-pointer hover:bg-blue-700 text-lg font-bold py-4 border border-blue-700 rounded-md duration-700 text-center"
        >
          Add to Basket
        </div>
      </div>
    </div>
  );
};

export default Detail;
