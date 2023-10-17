import PropTypes from "prop-types";

export const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <div key={idx}>
          <div>
            <img
              src="https://media.istockphoto.com/id/1169842299/photo/huawei-p30-lite.jpg?s=612x612&w=0&k=20&c=unTytpRBARy4uunFaiVL7oRCfPuIWPpat5xCed5jPJ8="
              alt=""
            />
          </div>
          {product.name}
          {product.brandName}
          {product.type}
          {product.price}
          {product.rating}
        </div>
      ))}
    </div>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array,
};
