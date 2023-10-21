import React from "react";
import { FormatPrice } from "./ui/FormatPrice";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id, name, image, price, type, brandName, rating } = product;

  return (
    <div
      key={_id}
      className="bg-white dark:bg-slate-700 group cursor-pointer rounded-xl border  space-y-4"
    >
      {/* Image */}
      <div className="rounded-t-xl bg-gray-100 dark:bg-slate-700 relative flex items-center justify-center">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full h-[220px] object-cover rounded-t-md"
        />
      </div>
      {/* Description */}
      <div className="p-2">
        <div className="text-gray-500 dark:text-gray-100">
          <div className="flex items-center justify-between space-x-2">
            <p className="font-semibold text-lg">{name}</p>
            <FormatPrice price={price} />
          </div>
          <div className="w-full mt-4 flex flex-col space-y-1">
            <div className="flex space-x-2 items-center">
              {" "}
              <p className="font-medium">Category:</p>
              <p className="text-sm ">{type}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-medium">Brand:</p>
              <p className="text-sm ">{brandName}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-medium">Rating:</p>
              <p className="text-sm ">{rating}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 space-x-6">
          <button
            onClick={() => navigate(`/products/${_id}/update`)}
            className="bg-gray-300 dark:bg-gray-800 w-full rounded-md 
                                border
                                border-transparent
                                disabled:cursor-not-allowed 
                                disabled:opacity-50
                                font-semibold
                                hover:opacity-75
                                transition py-[6px] px-3"
          >
            Update
          </button>

          <Button
            onClick={() => navigate(`/products/${_id}`)}
            size="sm"
            className="w-full"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
