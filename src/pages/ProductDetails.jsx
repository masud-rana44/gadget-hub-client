import { useLoaderData } from "react-router-dom";
import { Button } from "../components/ui/Button";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const product = data.data;

  return (
    <div className="text-2xl font-bold">
      <Button>At to Cart</Button>
      <img src={product.image} alt="" />
      {product.name}
    </div>
  );
};

export default ProductDetails;
