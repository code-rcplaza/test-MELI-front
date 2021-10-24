import PropTypes from "prop-types";
import Image from "./../Image";
import icon_free_shipping from "./../../assets/ic_shipping.png";
import "./Product.css";
import { Fragment } from "react";
import { thousandsSeparator } from "../../helpers";

const Product = ({ product }) => {
  console.log({ product });

  return (
    <Fragment>
      <section className="product">
        <div className="product-image">
          <Image URLImage={product.picture} type="result" />
        </div>
        <div className="product-info">
          <label className="product-info-price">
            ${thousandsSeparator(product.price.amount)}
          </label>
          {product.free_shipping && (
            <div className="product-info-shipping-icon">
              <Image URLImage={icon_free_shipping} type="icon" />
            </div>
          )}
          <label className="product-info-currency">
            {product.price.currency}
          </label>
        </div>
        <div className="product-info-title">
          <label>{product.title}</label>
        </div>
      </section>
      <div className="hr" />
    </Fragment>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number.isRequired,
    }),
    picture: PropTypes.shape.isRequired,
    condition: PropTypes.oneOf(["Nuevo"]).isRequired,
    free_shipping: PropTypes.bool.isRequired,
  }),
};

export default Product;
