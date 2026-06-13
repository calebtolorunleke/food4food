import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ffc9a2311d474fad96f62d0a3ca60238";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  //   useEffect(() => {
  //     function demo() {
  //       console.log("demo function executed");
  //     }
  //     demo();
  //   }, [query]);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
};

export default Search;
