import './button.style.css';
import ButtonComponent from './ButtonComponent';
const ButtonContainerComponent = (props) => {
    
    return (<div className="buttonContainer">
        <ButtonComponent
            className = {"primary"}
            value = {`${props.primaryValue}`}
            />
        <ButtonComponent 
            className={"secondary"}
            value = {`${props.secondaryValue}`}
        />
    </div>);
}
export default ButtonContainerComponent;