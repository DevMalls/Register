import './button.style.css';
const ButtonContainerComponent = (props) => {
    
    return (<div className="buttonContainer">
        {props.children}
    </div>);
}
export default ButtonContainerComponent;