import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";

const Card = () => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[35%] md:w-[40%] sm:[50%] max-sm:w-[60%] h-full border fixed top-0 right-0 z-30 bg-sky-950 p-3 overflow-scroll pt-20">
      <div className="flex items-center justify-between h-24 px-3 pt-3">
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
