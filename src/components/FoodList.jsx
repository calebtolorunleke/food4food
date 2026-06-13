import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData }) => {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodList;
