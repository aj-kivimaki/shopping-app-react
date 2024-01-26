import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  // store = state
  // product = reducer
  // products = data

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
