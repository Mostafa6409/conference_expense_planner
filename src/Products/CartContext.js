import { createContext, useContext, useState } from "react";

const CartContext = createContext(); //Think of it as a “global store” that any component can subscribe to.


export function CartProvider({children}){
    const [items, setItems] = useState([]);
    
    const Increase = (id) =>{
        setItems((prev) => 
        prev.map((item) => 
        item.id === id?{...item, count:item.count +1}:item
        )
        );
    };
    
    const Decrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const onRemove = (id) =>{
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return(
    <CartContext.Provider value= {{items, setItems, Increase, Decrease, onRemove}}>
        {children}
    </CartContext.Provider>
  );

}

export const useCart = () => useContext(CartContext); //A convenience hook so you can just call useCart() inside any component.

