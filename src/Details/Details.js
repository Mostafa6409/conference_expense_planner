import Nav from '../Components/Navbar/Nav.js';
import { useCart } from "../Products/CartContext";
import Buttons from '../Components/Buttons/Buttons.js';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./Details.css";

function Details() {
  const { items, onRemove, Decrease, Increase } = useCart();

  // calculate total
  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <Nav />
      <div className="details-container">
        <h1>Conference Details</h1>

        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className='t-card'>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.count}</p>
            <p>Total: ${item.price * item.count}</p>
            </div>
            {/* Decrease / Increase buttons like AddOn */}
            <div className='b-card'>
            <Buttons
              type="forth"
              label={<AiFillCaretLeft />}
              onClick={() => Decrease(item.id)}
            />
            
            <Buttons
              type="forth"
              label={<AiFillCaretRight />}
              onClick={() => Increase(item.id)}
            />
            {/* Remove button styled as forth */}
            
            <Buttons
              type="forth"
              label="Remove"
              onClick={() => onRemove(item.id)}
            />
            </div>
          </div>
        ))}

        <h2>Total: ${total}</h2>
      </div>
    </>
  );
}

export default Details;
