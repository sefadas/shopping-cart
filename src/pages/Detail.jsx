import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/reducers/detailSlice";

const Detail = () => {
  const id = useParams();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productValue);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  console.log(products, "products");

  return <div></div>;
};

export default Detail;
