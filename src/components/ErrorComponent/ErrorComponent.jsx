import './error.style.css';
const ErrorComponent = (props) => {
    return (
        <span>
            {props.message}
        </span>);
}
export default ErrorComponent;