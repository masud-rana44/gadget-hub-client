import React from "react";
import { FormatPrice } from "./ui/FormatPrice";
import { useNavigate } from "react-router-dom";
import { RatingComponent } from "./ui/RatingComponent";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id, name, image, price, type, brandName, rating } = product;

  return (
    <div
      key={_id}
      className="bg-white  group cursor-pointer rounded-xl border border-gray-400 sm:border-gray-300  space-y-4 flex flex-col overflow-hidden shadow-sm"
    >
      {/* Image */}
      <div className="rounded-t-xl h-[300px] sm:h-[200px] bg-white p-16 relative flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full  object-cover rounded-t-md group-hover:scale-[118%] transition duration-300"
        />
      </div>
      {/* Description */}
      <div className="p-3  flex-1 flex flex-col space-between bg-gray-100 rounded-lg">
        <div className="text-gray-600 mb-3">
          <div className="flex items-center justify-between space-x-2 mb-2">
            <p className="font-semibold text-lg text-gray-900">{name}</p>
            <FormatPrice price={price} />
          </div>
          <div className="w-full  flex flex-col space-y-1 ">
            <div className="flex space-x-2 items-center">
              {" "}
              <p className="font-medium">Category:</p>
              <p className="text-sm capitalize">{type}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-medium">Brand:</p>
              <p className="text-sm ">{brandName}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="font-medium">Rating:</p>
              <RatingComponent rating={rating} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto space-x-6">
          <button
            onClick={() => navigate(`/products/${_id}/update`)}
            className=" w-full rounded-md 
                                border-2
                                border-gray-800
                                text-gray-800
                                disabled:cursor-not-allowed 
                                disabled:opacity-50
                                font-semibold
                                hover:opacity-75
                                text-sm
                                transition py-[4px] px-2"
          >
            Update
          </button>

          <button
            onClick={() => navigate(`/products/${_id}`)}
            className=" w-full rounded-md 
                                bg-gray-800
                                text-gray-100
                                disabled:cursor-not-allowed 
                                disabled:opacity-50
                                font-semibold
                                hover:opacity-75
                                text-sm
                                transition py-[6px] px-2"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
