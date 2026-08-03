import './Start.css'
import Buttons from '../Components/Buttons/Buttons.js'
import { useNavigate } from "react-router-dom";

function Start(){
    const navigate = useNavigate();

 return(
    <div className="start-container">
        <div className="start-left">
         <h1>Conference Expense Planner</h1>
         <p>Welcome to the Conference Expense Planner!</p>
         <Buttons label="Get Started" onClick={() => navigate('/Dashboard')} />
        </div>

        <div className="start-right">
         <h2>Welcome to BudgetEase Solutions</h2>
         <p>
          Your trusted partner in simplifying budget management and financial solutions.
          We understand the importance of effective planning and provide intuitive,
          user-friendly tools to meet diverse needs.
         </p>
         <p>
          Our mission is to make budgeting effortless and accessible for everyone —
          whether you're a small business owner, a busy professional, or an individual
          managing personal finances.
         </p>
        </div>
    </div>
 )
}

export default Start;
