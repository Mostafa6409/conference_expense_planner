import { Routes, Route } from "react-router-dom";
import Start from './Startpage/Start.js'
import Dashboard from './Dashboard/Dashboard.js'
import Venue from './Products/Venue.js'
import Meal from './Products/Meal.js'
import AddOn from './Products/AddOn.js'
import Details from './Details/Details.js'
import { CartProvider } from "./Products/CartContext";
// import './App.css'

function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/addon" element={<AddOn />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    </CartProvider>
  );
}

export default App;
