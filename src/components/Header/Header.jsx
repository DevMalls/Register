import { Link } from "react-router-dom";
import './header.style.css';
const Header = (props) => {
    
    return (
    <header className="header">
        <h1>Welcome</h1>
        <Link to='/' className="logout" onClick={props.onClick}>Logout</Link>
    </header>);
}
export default Header;