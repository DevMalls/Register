import { Link } from "react-router-dom";
const Home = () => {
    return (<div>
            <Link to='/'><button>Logout</button></Link>
            <h1>Welcome User</h1>
    </div>);
}
export default Home;