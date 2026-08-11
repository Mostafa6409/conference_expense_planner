import Nav from "../Components/Navbar/Nav";
import { useState, useEffect } from "react";
import './Products.css';
import Buttons from '../Components/Buttons/Buttons.js';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useCart } from "./CartContext";

function Meal() {
  const [meals, setMeals] = useState([]);
  const { items, setItems, Increase, Decrease } = useCart(); // shared cart

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  // helper: get current count of a meal in cart
  const getCount = (id) => {
    const found = items.find((i) => i.id === id);
    return found ? found.count : 0;
  };

  // add or increase meal
  const handleIncrease = (meal) => {
    const exists = items.find((i) => i.id === meal.id);
    if (exists) {
      Increase(meal.id); // bump count
    } else {
      setItems((prev) => [...prev, { ...meal, count: 1 }]); // first time add
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Meal Section</h1>
        {meals.map((meal) => (
          <div className="meal" key={meal.id}>
            <h2>{meal.name}</h2>
            <p>Price: ${meal.price}</p>

            <Buttons
              type="forth"
              label={<AiFillCaretLeft />}
              onClick={() => Decrease(meal.id)}
            />
            <span>{getCount(meal.id)}</span>
            <Buttons
              type="forth"
              label={<AiFillCaretRight />}
              onClick={() => handleIncrease(meal)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Meal;
