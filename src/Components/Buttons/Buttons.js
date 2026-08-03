import './Buttons.css'

function Buttons({ label, onClick , type = 'primary' }){
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Buttons;