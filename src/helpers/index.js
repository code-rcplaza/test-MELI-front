import { useLocation } from "react-router-dom";

export const searchQueryParameter = () => {
  return new URLSearchParams(useLocation().search);
};

export const thousandsSeparator = (price) => {
  if (typeof price !== "number") {
    price = parseInt(price);
  }

  return price.toLocaleString("es-AR");
};
