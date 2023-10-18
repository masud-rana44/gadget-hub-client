import { useLoaderData } from "react-router-dom";
import { CreateOrUpdateProductForm } from "../components/CreateOrUpdateProductForm";

const ProductUpdate = () => {
  const { data } = useLoaderData();
  const product = data.data;

  return (
    <div>
      <CreateOrUpdateProductForm product={product} />
    </div>
  );
};

export default ProductUpdate;
