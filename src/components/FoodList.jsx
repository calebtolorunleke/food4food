import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem setFoodId={setFoodId} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodList;
