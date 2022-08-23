import InputComponent from "../../components/InputComponent/InputComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import {hasNoError, getLocalStorage, userEmailChangeHandler,passwordChangeHandler,setSessionStorage} from '../../utils/utilities';
import { defaultSignInInput, adminEmail, adminPasword} from '../../store/constants';
import { signInActions } from '../../store/signInSlice';

const SigninForm = () => {
  const input = useSelector((state) => state.signInSlice);  
  const storeData = useSelector((state) => state);  
  console.log(storeData);
  const {userEmail,userPassword} = input;
  const {email,password,inputClear,error} = signInActions;

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  let payload;

const inputChange = (event) => {
    switch (event.target.name) {
      case "userEmail": 
            payload = userEmailChangeHandler(event.target.value);
            dispatch(email(payload));
            break;
      case "userPassword": 
            payload = passwordChangeHandler(event.target.value);            
            dispatch(password(payload));
            break;
      default:
            return '';
    }
}

const registerHandler = (event) => {   
    event.preventDefault();
    dispatch(inputClear(defaultSignInInput)); 
    navigate('/register');
}

const signinHandler = (event) => {
    event.preventDefault();  
    setSessionStorage('loginUser','{loginStatus: true}' );
    if(userEmail.value === adminEmail && userPassword.value === adminPasword){
            dispatch(inputClear(defaultSignInInput));
            console.log(sessionStorage.getItem('loginUser'));
            navigate('/welcome',{state:{userType:'admin'}});
            return;
    }
    else {
          for (var key in input) {
            if (
              input[key].value === "" ||
              input[key].value.length === 0
            ) {
            const payload = {key, error: true };
            dispatch(error(payload));
            return true;
            }
          }

            if(hasNoError(input)) {
                let existingData = getLocalStorage("existingData");
                if(existingData === null) {
                alert("Kindly Register");
                dispatch(inputClear(defaultSignInInput));
                navigate('/register');
                return;
                }
                else{
                const userData = existingData.filter((value) => {
                    return value.email === userEmail.value && window.atob(value.password) === userPassword.value && value.status ==="Added";
                })                
                    if(userData.length > 0){
                        alert("Welcome");
                        dispatch(inputClear(defaultSignInInput));
                        navigate('/welcome',{state:{userType:'user', ...userData[0]}});
                        return;
                    }
                    else {
                        alert("Kindly register first");
                        dispatch(inputClear(defaultSignInInput));
                        navigate('/register');
                        return;
                    }   
                }        
            }
    }
}

  return (
    <div className="form">
      <h2>Sign in</h2>
      <InputComponent name="userEmail"
        type="email"
        placeholder="Email"
        value={userEmail.value}
        inputChange={inputChange}
      />
       {userEmail.error && (
        <ErrorComponent message="Invalid Email" />
      )}
      <InputComponent name="userPassword"
        type="password"
        placeholder="Password"
        value={userPassword.value}
        inputChange={inputChange}
      />
       {userPassword.error && (
        <ErrorComponent message="Password must contain 8 characters" />
      )}
      
      <ButtonContainerComponent>
        <ButtonComponent
          className="primary"
          value="Sign in"
          onClick = {signinHandler}
        />
        <ButtonComponent
          className="secondary"
          value="Register"
          onClick = {registerHandler}
        />
      </ButtonContainerComponent>

    </div>
  );
};
export default SigninForm;