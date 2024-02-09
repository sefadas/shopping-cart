import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/reducers/detailSlice";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const details = useSelector((state) => state.details.detailValue);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  console.log(details, "details");

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

  return (
    <div className="w-full flex justify-center gap-4">
      <img className="w-1/3" src={details?.image} alt="" />
      <div className="w-2/3">
        <div>{details?.category}</div>
        <div>{details?.title}</div>
        <div>{details?.description}</div>
        <div>
          Rate: {details?.rating?.rate} - Stock: {details?.rating?.count}
        </div>
        <div>Price: {details?.price}</div>
        <div className="flex items-center">
          <CgMathMinus
            onClick={decrement}
            className="cursor-pointer"
            size={25}
          />
          <span>{counter}</span>
          <CgMathPlus
            onClick={increment}
            className="cursor-pointer"
            size={25}
          />
        </div>
        <div className="w-full bg-blue-500 cursor-pointer py-3">Add</div>
      </div>
    </div>
  );
};

export default Detail;
