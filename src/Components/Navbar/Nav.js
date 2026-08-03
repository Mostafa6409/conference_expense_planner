import './Nav.css';
import Buttons from '../Buttons/Buttons.js';
import { useNavigate } from 'react-router-dom';
function Nav() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="Logo">
                <label>Conference Expense Planner</label>
            </div>
        <div className="nav-buttons">
            <div className="nav-item">
                <Buttons label="Dashboard" onClick={() => navigate('/Dashboard')} type="secondary" />
            </div>
            <div className="nav-item">
                <Buttons label="Venues" onClick={() => navigate('/Venue')} type="secondary" />
            </div>
            <div className="nav-item">
                <Buttons label="Add On" onClick={() => navigate('/AddOn')} type="secondary" />
            </div>
            <div className="nav-item">
                <Buttons label="Meals" onClick={() => navigate('/Meal')} type="secondary" />
            </div>
        </div>
        <div className="details-btn">
                <Buttons label="Show Details" onClick={() => navigate('/Details')} type="thirdary" />
        </div>
        </div>
    )
}

export default Nav;