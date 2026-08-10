import Nav from "../Components/Navbar/Nav";
import { useState, useEffect } from "react";
import Buttons from '../Components/Buttons/Buttons.js';
import './Products.css';
import { AiFillCaretLeft,  AiFillCaretRight} from "react-icons/ai";
import { increase, decrease } from "./ProductsContext.js"

function Venue(){

const [count, setCount] = useState({});
// const increase = (venueId) => {
//     setCount((prev) => ({
//       ...prev,
//       [venueId]: (prev[venueId] || 0) + 1,
//     }));
//   };

//   const decrease = (venueId) => {
//     setCount((prev) => ({
//       ...prev,
//       [venueId]: Math.max((prev[venueId] || 1) - 1, 0),
//     }));
//   };

const [venues, setVenues] = useState([]);

useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setVenues(data.venues));
  }, []);

    return(
        <>
        <Nav />
        
        <div className="container">
            <h1>Venue Section</h1>
                {venues.map((venue) => (   
                    <div className="venue" key = {venue.id}>
                        <img src={venue.img} alt={venue.name} />
                        <h2>{venue.name}</h2>
                        <p>Capacity: {venue.capacity}</p>
                        <p>Price: ${venue.price}</p>
                        <Buttons type="forth" label={<AiFillCaretLeft/>} onClick={() => setCount((prev) => decrease(prev, venue.id))}></Buttons>
                        <span>{count[venue.id] || 0}</span>
                        <Buttons type="forth" label={<AiFillCaretRight/>} onClick={() => setCount((prev) => increase(prev, venue.id))}></Buttons>
                    </div>
                ))}
            
        </div>
        </>
    )
}

export default Venue;