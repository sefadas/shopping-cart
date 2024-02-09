import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";

const Card = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[40%] h-full border fixed top-0 right-0 z-30 bg-gray-400 p-3">
      <div className="flex items-center justify-between h-20">
        <h1>MY CART:</h1>
        <MdClose
          onClick={() => dispatch(openCard())}
          className="cursor-pointer"
          size={25}
        />
      </div>

      <div className="h-32 flex flex-col items-center">
        <img src="" alt="" />
        <div>men's clothing</div>
      </div>
    </div>
  );
};

export default Card;
