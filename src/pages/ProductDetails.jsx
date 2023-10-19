import { redirect, useLoaderData } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const { user } = useAuth();

  if (!user) return redirect("/");

  const product = data.data;

  const onClick = async () => {
    try {
      await axios.post("http://localhost:8080/api/carts", {
        userId: user.uid,
        productId: product._id,
      });

      toast.success("Product added to the cart");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="text-2xl font-bold">
      <Button onClick={onClick}>At to Cart</Button>
      <img src={product.image} alt="" />
      {product.name}
    </div>
  );
};

export default ProductDetails;
