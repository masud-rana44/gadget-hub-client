import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

export const CartItem = ({ item, setItems }) => {
  if (!item?._id) return null;

  const onDelete = async () => {
    try {
      await axios.delete(
        `https://brand-shop-server-one.vercel.app/api/carts/${item._id}`
      );

      toast.success("Product removed from cart");
      setItems((items) => items.filter((i) => i._id !== item._id));
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <img
          className="h-14 w-14 rounded-sm bg-white"
          src={item.image}
          alt={`Image of ${item.name}`}
        />
        <div className="flex flex-col space-y-[2px]">
          <h4 className="text-lg font-medium">{item.name}</h4>
          <p className="capitalize text-gray-500 dark:text-gray-400 text-sm">
            {item.type}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <div className="hidden md:flex items-center space-x-10">
          <p className="font-medium ">${item.price}</p>
        </div>
        <button onClick={onDelete}>
          <BiTrash className="text-gray-400 hover:text-gray-600 transition dark:text-slate-400 hover:dark:text-slate-300" />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  setItems: PropTypes.func,
};
