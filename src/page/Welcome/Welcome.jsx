
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import Header from '../../components/Header/Header';
import {useLocation} from 'react-router-dom';
const Welcome = () => {    
    const location = useLocation();
    const usertype = location.state.userType;
    const callUser = (usertype === 'admin') ? <TableComponent/> : <ProfileComponent profileData={location.state}/>;
    return (
        <div>
            <Header/>
            {callUser}
        </div> 
    );
}
export default Welcome;