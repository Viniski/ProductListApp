import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { updateProducts } from "../../redux/productsSlice";
import { updateStore } from "../../redux/productsSlice";
import ProductCard from "./ProductCard/ProductCard";
import { Stack } from "@mui/material";

function ProductList() {
  const products = useAppSelector((state) => state.products.value);
  const loading  = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("before");
    dispatch(updateStore());
    console.log(products);
  }, [])

  return (
    <Stack>
      {loading || products.map((el) => (
        <ProductCard key={el.id} name={el.name} />
      ))}
    </Stack>
  );
}

export default ProductList;
