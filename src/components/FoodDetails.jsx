import React, { useEffect } from "react";
const API_KEY = "ffc9a2311d474fad96f62d0a3ca60238";

const FoodDetails = ({ foodId, setFood }) => {
  const URL = `http://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apikey=${API_KEY}`);
      const data = res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div></div>
      food details {foodId} {food.title} <img src={food.image} alt="" />
    </div>
  );
};

export default FoodDetails;
