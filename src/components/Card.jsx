import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";
import { removeObject } from "../redux/reducers/CardSlice";

const Card = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cardValue);
  const qty = useSelector((state) => state.cards.qty);

  console.log(cards, "cards");

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

      {cards?.map((crd, i) => (
        <div key={i} className="flex border-white pb-2 border-b">
          <img src={crd?.image} alt="" className="h-32 object-cover w-28" />
          <div className="w-44 pl-2">
            <div className="opacity-70">{crd?.title?.substring(0, 27)}...</div>
            <div className="font-bold">{crd?.category}</div>
            <div className="font-bold text-nowrap">
              PRICE : {crd?.price?.toFixed(2)} $ ({qty} piece)
            </div>
            <div className="flex">
              <button
                onClick={() => dispatch(removeObject(crd.id))}
                className="w-20 h-8 bg-red-500 hover:bg-red-700 rounded-lg whitespace-nowrap duration-700"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
