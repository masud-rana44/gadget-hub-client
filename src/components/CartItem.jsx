import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

export const CartItem = ({ item }) => {
  if (!item?._id) return null;

  const onDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/carts/${item._id}`);

      toast.success("Product successfully deleted");
      window.location.reload();
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
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-sm bg-white"
          src={item.image}
          alt={`Image of ${item.name}`}
        />
        <h4 className="text-lg font-medium">{item.name}</h4>
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <p>{item.type}</p>
        <p>{item.price} BDT</p>
      </div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.array,
};