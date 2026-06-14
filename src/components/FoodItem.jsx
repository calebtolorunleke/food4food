import styles from "./fooditem.module.css";

const FoodItem = ({ item, setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.image} alt="" className={styles.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(item.id);
            setFoodId(item.id);
          }}
        >
          View recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
