import './button.style.css';

const ButtonComponent = (props) => {  
    return (
       <button className={`${props.className}`} value={`${props.value}`} onClick={props.onClick}>
            {props.value}
        </button>
    );

}
export default ButtonComponent;