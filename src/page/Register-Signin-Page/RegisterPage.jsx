import RegisterForm from './RegisterForm';
import CardComponent from '../../components/CardComponent/CardComponent';
import ImageComponent from '../../components/ImageComponent/ImageComponent';

const Signup = () => {
    return (
       <CardComponent>
        <RegisterForm/>
       <ImageComponent/>
       </CardComponent>      
    );

}
export default Signup;