import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { FormatPrice } from "../components/ui/FormatPrice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const { user } = useAuth();

  if (!user) return navigate("/");

  const product = data.data;

  const onClick = async () => {
    try {
      await axios.post("https://brand-shop-server-one.vercel.app/api/carts", {
        userId: user.uid,
        productId: product._id,
      });

      toast.success("Product added to the cart");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0  flex items-center flex-col md:flex-row gap-10">
      <div className="flex-1">
        <img
          className="w-full  object-cover  p-20"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
      </div>
      <div className="flex-1 flex flex-col space-y-4">
        <h3 className="text-3xl font-bold">{product.name}</h3>
        <div className="-ml-2">
          <FormatPrice price={product.price} />
        </div>
        <p>{product.rating}/5</p>
        <div className="font-xl font-medium ">
          <p>
            <span>Category: </span>
            <span className="font-normal">{product.type}</span>
          </p>
          <p>
            <span>Brand Name: </span>
            <span className="font-normal">{product.brandName}</span>
          </p>
        </div>
        <div>
          <Button
            size="sm"
            onClick={onClick}
            className="flex items-center space-x-2"
          >
            <AiOutlineShoppingCart />
            <span>At to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
