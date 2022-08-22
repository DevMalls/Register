import './image.style.css';
import { ReactComponent as ImageSvg } from '../../assests/background.svg';
const ImageComponent = () => {
    return (
        <ImageSvg className="frontImage" alt="Signup Images"/>
   );
}
export default ImageComponent;