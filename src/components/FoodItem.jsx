const FoodItem = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="" />
      <button>View recipe</button>
    </div>
  );
};

export default FoodItem;
