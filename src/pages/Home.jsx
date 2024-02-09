import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/reducers/productSlice";
import Product from "../components/Product";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productValue);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products, "products");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products && products.map((prd, i) => <Product key={i} prd={prd} />)}
    </div>
  );
};

export default Home;