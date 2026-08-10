import Nav from "../Components/Navbar/Nav";
import { useState, useEffect } from "react";
import './Products.css';
import Buttons from '../Components/Buttons/Buttons.js';


function Meal(){

const [meals, setMeals] = useState([]);

useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

    return(
        <>
        <Nav />
       
        <div className="container">
             <h1>Meal Section</h1>
            {meals.map((meal) => (
                <div className="meal">
                    <h2>{meal.name}</h2>
                    <p>Price: ${meal.price}</p>
                    <Buttons label="add" type="forth"></Buttons>
                </div>
            ))}
        </div>
        </>
    )
}

export default Meal;