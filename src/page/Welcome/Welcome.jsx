
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import Header from '../../components/Header/Header';
import { removeSessionStorage, getSessionStorage } from '../../utils/utilities';
import {useLocation, Navigate} from 'react-router-dom';
const Welcome = () => {    
    const location = useLocation();
    const usertype = location.state.userType;
    const callUser = (usertype === 'admin') ? <TableComponent/> : <ProfileComponent profileData={location.state}/>;
    const loginStatus = getSessionStorage("loginUser");

    const logoutHandler = () =>{
        removeSessionStorage("loginUser");
    }
        if(loginStatus !== null){
            return ( <div>
                <Header onClick={logoutHandler}/>
                {callUser} 
            </div>
             
        );
        }
        else {
            return <Navigate to="/" />
        }
       
}
export default Welcome;