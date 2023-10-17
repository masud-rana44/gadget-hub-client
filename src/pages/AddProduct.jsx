import toast from "react-hot-toast";
import { Button } from "../components/ui/Button";
import { FormRow } from "../components/ui/FormRow";
import axios from "axios";

const AddProduct = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const imageUrl = form.imageUrl.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    if (!imageUrl || !name || !brandName || !type || !price || !description)
      return toast.error("Required field missing");

    const newProduct = {
      name,
      imageUrl,
      brandName,
      type,
      price,
      rating,
      description,
    };

    try {
      await axios.post("http://localhost:8080/api/products", newProduct);

      toast.success("Product successfully added");
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
    <div className="container mx-auto p-5">
      <form onSubmit={onSubmit} className="space-y-3">
        <FormRow label="Product image">
          <input
            type="text"
            name="imageUrl"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product name">
          <input
            type="text"
            name="name"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Brand name">
          <input
            type="text"
            name="brandName"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product Type">
          <select
            name="type"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="laptop">Laptop</option>
          </select>
        </FormRow>
        <FormRow label="Product price">
          <input
            type="number"
            name="price"
            min={1}
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product description">
          <textarea
            type="text"
            name="description"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product rating">
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <Button>Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
