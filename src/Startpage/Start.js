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
         <Buttons label="Get Started" onClick={() => navigate('/Dashboard')} type="primary"/>
        </div>

        <div className="start-right">
         <p>
          Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management
           and financial solutions. At BudgetEase, we understand the importance of effective budget 
           planning and strive to provide intuitive, user-friendly solution, to meet the diverse needs of our clients.
         </p>
         <p>
          With a commitment to efficiency and innovation,
           we empower individuals and businesses to take control of their finances and achieve their goals with ease.
         </p>
         <p>
            At BudgetEase Solutions, 
            our mission is to make budgeting effortless and accessible for everyone.
             Whether you're a small business owner, a busy professional, 
             or an individual looking to manage your personal finances, 
             we offer tailored solutions to streamline your budgeting process.
         </p>
        </div>
    </div>
 )
}

export default Start;
