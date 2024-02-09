import React from "react";

const Product = ({ prd }) => {
  return (
    <div className="w-1/4 h-[470px] border-2 hover:border-indigo-500 rounded-lg flex flex-col items-center gap-1">
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        className="object-cover h-52 w-full"
        src={prd?.image}
        alt=""
      />
      <div className="font-bold">{prd?.category}</div>
      <div className="">{(prd?.title).substring(0, 27)}...</div>
      <div className="opacity-70">{(prd?.description).substring(0, 33)}...</div>
      <div className="font-bold text-lg">{prd?.price} $</div>
      <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 duration-500 rounded-lg">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
