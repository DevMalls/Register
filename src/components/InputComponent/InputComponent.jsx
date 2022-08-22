import './input.style.css';
const InputComponent  = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={`${props.name}`}>{`${props.placeholder}`}
                <input type={`${props.type}`} id={`${props.name}`} name={`${props.name}`} placeholder={`${props.placeholder}`} onChange={props.inputChange} value={props.value} />
            </label>
        </div>);
}
export default InputComponent;