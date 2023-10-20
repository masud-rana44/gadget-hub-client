import axios from "axios";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "./ui/Button";
import { FormRow } from "./ui/FormRow";

export const CreateOrUpdateProductForm = ({ product = {} }) => {
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const imageUrl = form.imageUrl.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    if (!imageUrl || !name || !brandName || !type || !price || !rating)
      return toast.error("Required field missing");

    const newProduct = {
      name,
      imageUrl,
      brandName,
      type,
      price,
      rating,
    };

    try {
      if (!product?._id) {
        const description = form.description.value;
        if (!description) return toast.error("Required field missing");

        newProduct.description = description;

        await axios.post("http://localhost:8080/api/products", newProduct);

        toast.success("Product successfully added");
      } else {
        await axios.patch(
          `http://localhost:8080/api/products/${params.productId}`,
          newProduct
        );

        toast.success("Product successfully updated");
        form.reset();
        navigate(`/brands/${brandName}`);
      }
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
      <h3 className="text-2xl font-bold text-center  mb-6 mt-8">
        {product?._id ? `Update for ${product.name}` : "Create New Product"}
      </h3>
      <form onSubmit={onSubmit} className="space-y-5 max-w-2xl mx-auto">
        <FormRow label="Product image">
          <input
            type="text"
            name="imageUrl"
            defaultValue={product.image}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product name">
          <input
            type="text"
            name="name"
            defaultValue={product.name}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Brand name">
          <input
            type="text"
            name="brandName"
            defaultValue={product.brandName}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product Type">
          <select
            name="type"
            defaultValue={product.type}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
            <option value="headphone">Headphone</option>
            <option value="camera">Camera</option>
            <option value="tv">TV</option>
            <option value="speaker">Speaker</option>
          </select>
        </FormRow>
        <FormRow label="Product price">
          <input
            type="number"
            step="any"
            name="price"
            defaultValue={product.price}
            min={1}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>

        <FormRow label="Product description">
          <textarea
            type="text"
            step="0.1"
            name="description"
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product rating">
          <input
            type="number"
            name="rating"
            step="0.1"
            defaultValue={product.rating}
            min={1}
            max={5}
            className="border border-gray-400 dark:border-slate-500  dark:bg-slate-700 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <div className="w-full">
          <Button>{product?._id ? "Update Product" : "Add Product"}</Button>
        </div>
      </form>
    </div>
  );
};

CreateOrUpdateProductForm.propTypes = {
  product: PropTypes.object,
};
