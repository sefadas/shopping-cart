import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";

const Navbar = () => {
  const [color, setColor] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.getElementById("root");

    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "gray";
      root.style.color = "black";
    }
  }, [color]);
  return (
    <div className="flex items-center justify-between px-3 h-24">
      <div className="text-3xl tracking-widest font-bold">
        <a href="/">SHOPPING</a>
      </div>
      <div className="flex items-center gap-4">
        <input
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
          <span className="absolute -top-3 -right-3 px-1 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
