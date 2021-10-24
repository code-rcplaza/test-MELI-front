import PropTypes from "prop-types";
import shortid from "shortid";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ categories }) => {
  const categoriesAux = [...categories];

  let index = 1;
  categories.map((element) => {
    if (categories.indexOf(element) !== categories.length - 1) {
      categoriesAux.splice(categories.indexOf(element) + index, 0, ">");
      index++;
    }
  });

  return (
    <div className="breadcrumbs">
      {categoriesAux.map((category) => (
        <label key={shortid.generate()} className="breadcrumb">
          {category}
        </label>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumbs;
