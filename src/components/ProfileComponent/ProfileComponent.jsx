import {ReactComponent as ProfileSvg} from '../../assests/background.svg';
import CardComponent from '../CardComponent/CardComponent';
import './profile.style.css';
const ProfileComponent = (props) => {
    const profileData = props.profileData;
    return (
        <CardComponent>       
         <ProfileSvg className="profile-image"/>
            <div  className="profile-data">
            <h2>Name: {profileData.name}</h2>
            <h2>Email: {profileData.email}</h2>
            <h2>Gender: {profileData.gender}</h2>
            <h2>Date: {profileData.date}</h2>
            <h2>Status: {profileData.status}</h2>
            </div>
        </CardComponent>
    )
}
export default ProfileComponent;