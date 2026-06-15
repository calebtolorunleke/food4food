import React, { useEffect, useState } from "react";
const API_KEY = "ffc9a2311d474fad96f62d0a3ca60238";
import Styles from "./fooddetails.module.css";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `http://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={Styles.recipeCard}>
        <h1 className="Styles.recipeName"> {food.title} </h1>
        <img src={food.image} alt="" className={Styles.recipeImage} />
        <div className={Styles.recipeDetails}>
          <span>
            🧑‍🧑‍🧒‍🧒 <strong> Serves {food.servings}</strong>
          </span>
          <span>
            ⏱️ <strong> {food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            {" "}
            {food.vegetarian ? "🥬 Vegetarian" : "🍖 Non-Vegetarian"}
          </span>
          <span>{food.vegan ? "🐮 Vegan " : " "}</span>
        </div>
        <div>
          $ <span> {food.pricePerServing / 100} Per Serving</span>
        </div>
        <h2>Instructions</h2>
        <div className={Styles.recipeInstructions}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <ul>
                {food.analyzedInstructions?.[0]?.steps?.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
