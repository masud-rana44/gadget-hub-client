import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { RatingComponent } from "../components/ui/RatingComponent";
import { useAuth } from "../contexts/AuthContext";
import { FormatPrice } from "../components/ui/FormatPrice";

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
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0 flex items-center flex-col lg:flex-row gap-20 mt-10">
      <div className="flex-[40%] flex items-center justify-center w-full min-h-[300px] rounded-lg overflow-hidden p-4 bg-white">
        <img
          className="w-full  object-cover xl:p-20 rounded-lg"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
      </div>
      <div className="flex-[60%] flex flex-col space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <div className="-ml-2">
            <FormatPrice price={product.price} className="dark:text-gray-200" />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-[15px]">
          {product.description}
        </p>

        <div className="w-full mt-4 flex flex-col space-y-1 dark:text-gray-200">
          <div className="flex space-x-2 items-center">
            <p className="font-medium">Rating:</p>
            <RatingComponent rating={product.rating} />
          </div>
          <div className="flex space-x-2 items-center">
            <p className="font-medium">Category:</p>
            <p className="text-sm ">{product.type}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="font-medium">Brand:</p>
            <p className="text-sm ">{product.brandName}</p>
          </div>
        </div>
        <div>
          <Button
            size="sm"
            onClick={onClick}
            className="flex items-center space-x-2 mt-4"
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
