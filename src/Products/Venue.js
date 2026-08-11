import Nav from "../Components/Navbar/Nav";
import { useState, useEffect } from "react";
import Buttons from '../Components/Buttons/Buttons.js';
import './Products.css';
import { AiFillCaretLeft,  AiFillCaretRight} from "react-icons/ai";
import { useCart } from './CartContext.js';

function Venue(){

const { items, setItems, Increase, Decrease } = useCart();
const [venues, setVenues] = useState([]);

useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setVenues(data.venues));
  }, []);

  const getCount = (id) => {
    const found = items.find((i) => i.id === id);
    return found ? found.count : 0;
  };

  const handleIncrease = (venue) => {
    const exists = items.find((i) => i.id === venue.id);
    if (exists) {
      Increase(venue.id);
    } else {
      setItems((prev) => [...prev, { ...venue, count: 1 }]);
    }
  };


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
                        <Buttons type="forth" label={<AiFillCaretLeft/>} onClick={() => Decrease(venue.id)}></Buttons>
                        <span>{getCount(venue.id)}</span>
                        <Buttons type="forth" label={<AiFillCaretRight/>} onClick={() => handleIncrease(venue)}></Buttons>
                    </div>
                ))}
            
        </div>
        </>
    )
}

export default Venue;