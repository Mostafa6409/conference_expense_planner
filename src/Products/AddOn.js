import Nav from '../Components/Navbar/Nav.js';
import { useState, useEffect } from 'react';
import './Products.css';
import { AiFillCaretLeft,  AiFillCaretRight} from "react-icons/ai";
import Buttons from '../Components/Buttons/Buttons.js';
import { useCart } from './CartContext.js';


function AddOn(){
    
    const { items, setItems, Increase, Decrease } = useCart();

    const getCount = (id) => {
    const found = items.find((i) => i.id === id);
    return found ? found.count : 0;
  };

    const [addons, setAddons] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setAddons(data.addons));
    }, []);

    const handleIncrease = (addon) => {
    const exists = items.find((i) => i.id === addon.id);
    if (exists) {
       Increase(addon.id);
    } else {
      setItems((prev) => [...prev, { ...addon, count: 1 }]);
    }
  };

    return(
        <>
        <Nav />
        <div className="container">
        <h1>Add On Section</h1>

            {addons.map((addon) => (
                <div className="addon">
                    <img src={addon.img} alt={addon.name} />
                    <h2>{addon.name}</h2>
                    <p>Price: ${addon.price}</p>

                    <Buttons type="forth" label={<AiFillCaretLeft/>} onClick={() => Decrease(addon.id)}></Buttons>
                        <span>{getCount(addon.id)}</span>
                    <Buttons type="forth" label={<AiFillCaretRight/>} onClick={() => handleIncrease(addon)}></Buttons>
                </div>
            ))}
        </div>
        </>
    )
}

export default AddOn;