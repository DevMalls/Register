import './image.style.css';
import signupImages from '../../assests/background.svg';
const ImageComponent = (props) => {
    return (<img className="frontImage" src={signupImages} alt="Signup Images"></img>);
}
export default ImageComponent;