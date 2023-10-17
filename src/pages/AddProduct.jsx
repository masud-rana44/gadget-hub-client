import { Button } from "../components/ui/Button";
import { FormRow } from "../components/ui/FormRow";

const AddProduct = () => {
  return (
    <div className="container mx-auto p-5">
      <form className="space-y-3">
        <FormRow label="Product image">
          <input
            type="text"
            id="imageUrl"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product name">
          <input
            type="text"
            id="name"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Brand name">
          <input
            type="text"
            id="brandName"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product Type">
          <select
            type="text"
            id="type"
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
            id="price"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <FormRow label="Product description">
          <textarea
            type="text"
            id="description"
            className="border border-gray-400 dark:border-gray-500 dark:bg-gray-100 bg-white rounded-md px-3 py-2 shadow-sm"
          />
        </FormRow>
        <Button>Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
