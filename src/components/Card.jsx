import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openCard } from "../redux/reducers/drawerSlice";
import { removeObject, totalPrice } from "../redux/reducers/CardSlice";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cardValue);
  const totals = useSelector((state) => state.cards.total);

  useEffect(() => {
    dispatch(totalPrice(totals));
  }, [dispatch, totals]);

  return (
    <div className="lg:w-[35%] md:w-[40%] sm:[50%] max-sm:w-[60%] h-full border fixed top-0 right-0 z-30 bg-sky-950 p-3 overflow-scroll pt-20">
      <div className="flex items-center justify-between h-20 px-3 pt-3">
        <h1>
          {t("total")} {totals.toFixed(2)} {t("money")}
        </h1>

        <MdClose
          onClick={() => dispatch(openCard())}
          className="cursor-pointer"
          size={25}
        />
      </div>

      <button className="bg-green-500 rounded-lg px-3 py-2 hover:bg-green-700 duration-700">
        {t("finish")}
      </button>

      {cards?.map((crd, i) => (
        <div key={i} className="flex border-white pb-2 border-b pt-4">
          <img src={crd?.image} alt="" className="h-32 object-cover w-28" />

          <div className="w-44 pl-2">
            <div className="opacity-70">{crd?.title?.substring(0, 27)}...</div>

            <div className="font-bold">{crd?.category}</div>

            <div className="font-bold text-nowrap">
              {t("prc")} {crd?.price?.toFixed(2)} {t("money")} ({crd?.qty}{" "}
              {t("piece")})
            </div>

            <div className="flex">
              <button
                onClick={() => dispatch(removeObject(crd?.id))}
                className="w-20 h-8 bg-red-500 hover:bg-red-700 rounded-lg whitespace-nowrap duration-700"
              >
                {t("del")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
