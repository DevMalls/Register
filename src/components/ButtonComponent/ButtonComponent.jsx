import './button.style.css';
import {register,signin} from '../../utils/utilities';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const ButtonComponent = (props) => {    
const registerInput = useSelector( (state) => state.registerSlice);
    const buttonClickHandler = (e) => {
       e.target.value === "Register" ? register(registerInput) : signin();
    }
    return (
        <Link to={props.value === "Register" ? '/register' : '/'}><button className={`${props.className}`} value={`${props.value}`} onClick={buttonClickHandler}>
            {props.value}
        </button>
        </Link>
    );
}
export default ButtonComponent;