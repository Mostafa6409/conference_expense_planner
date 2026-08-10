import Nav from '../Components/Navbar/Nav.js';
import { useState, useEffect } from 'react';
import './Products.css';
import { AiFillCaretLeft,  AiFillCaretRight} from "react-icons/ai";
import { increase, decrease } from "./ProductsContext.js"
import Buttons from '../Components/Buttons/Buttons.js';


function AddOn(){

    const [count, setCount] = useState({});
    const [addons, setAddons] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setAddons(data.addons));
    }, []);

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

                    <Buttons type="forth" label={<AiFillCaretLeft/>} onClick={() => setCount((prev) => decrease(prev, addon.id))}></Buttons>
                        <span>{count[addon.id] || 0}</span>
                    <Buttons type="forth" label={<AiFillCaretRight/>} onClick={() => setCount((prev) => increase(prev, addon.id))}></Buttons>
                </div>
            ))}
        </div>
        </>
    )
}

export default AddOn;