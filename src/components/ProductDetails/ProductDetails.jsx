import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchContext from "../../../context/Search/SearchContex";
import Image from "./../Image";
import Breadcrumbs from "../Breadcrumbs";
import { options } from "./constants";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { item, categories, getItemByID } = useContext(SearchContext);

  const { id } = useParams();

  useEffect(() => {
    getItemByID(id);
  }, [id]);

  console.log({ categories });
  console.log({ item });

  return (
    <Fragment>
      <Breadcrumbs categories={categories} />
      {item && (
        <div className="product-details">
          <Image URLImage={item.picture} type="details" />
          <div className="product-details-price-info">
            <label className="product-detail-conditions">
              {item.condition} - {item.sold_quantity} vendidos
            </label>
            <label className="product-details-name">{item.title}</label>
            <label className="product-details-price">
              ${item.price.amount}
            </label>
            <button className="product-details-button-buy">Comprar</button>
          </div>
          <div className="product-details-info">
            <label className="product-details-title">
              {options.description_text}
            </label>
            <label className="product-details-description">
              {item.description}
            </label>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
