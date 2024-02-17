import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";
import debounce from "lodash.debounce";
import { filterSearch } from "../redux/reducers/productSlice";

const Navbar = () => {
  const [color, setColor] = useState(true);

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cardValue);

  useEffect(() => {
    const root = document.getElementById("root");

    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  const handleInputChange = debounce((value) => {
    dispatch(filterSearch(value));
  }, 1000);

  return (
    <div className="w-full bg-gray-500 fixed z-50">
      <div className="flex items-center justify-between h-24 px-4 container mx-auto">
        <div className="sm:text-3xl md:text-5xl lg:text-6xl max-sm:text-3xl tracking-widest font-bold bg-gradient-to-r from-red-500 via-gray-600 to-red-600 inline-block text-transparent bg-clip-text">
          <a href="/">SHOPPING</a>
        </div>
        <div className="flex items-center gap-4">
          <input
            onChange={(e) => handleInputChange(e.target.value)}
            type="text"
            placeholder="search"
            className="border p-2 outline-none rounded-lg bg-transparent"
          />
          <div onClick={() => setColor(!color)}>
            {color ? (
              <MdOutlineDarkMode size={25} className="cursor-pointer" />
            ) : (
              <MdDarkMode size={25} className="cursor-pointer" />
            )}
          </div>

          <div className="relative">
            <SlBasket
              onClick={() => dispatch(openCard())}
              size={25}
              className="cursor-pointer"
            />
            <span className="absolute -top-3 -right-3 px-1 w-5 h-5 text-center bg-red-600 rounded-full text-sm text-white">
              {cards?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
