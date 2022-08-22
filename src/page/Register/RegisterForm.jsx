import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerActions } from '../../store/registerSlice';
import { defaultRegisterInput } from '../../store/constants';
import { hasNoError, getLocalStorage, setLocalStorageItem, passwordChangeHandler, confirmPasswordChangeHandler,
nameChangeHandler, dateChangeHandler, genderChangeHandler, emailChangeHandler} from '../../utils/utilities';
import * as utilities from '../../utils/utilities';
//import { useParams } from 'react-router-dom';

const listOfGenders = ['Female', 'Male'];

const RegisterForm = (props) => {

  const input = useSelector((state) => state.registerSlice);
  const {name,date,gender,email,password,confirmPassword} = registerActions;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let payload;
  //let  {id}  = useParams();
  //console.log(id);
  // console.log(getLocalStorageSingleItem("existingData",id));

  const inputChange = (event) => {
    switch (event.target.name) {
      case "name":
        payload = nameChangeHandler(event.target.value);
        dispatch(name(payload));
        break;
      case "date":
        payload = dateChangeHandler(event.target.value);
        dispatch(date(payload));
        break;
      case "gender":
        payload = genderChangeHandler(event.target.value);
        dispatch(gender(payload));
        break;
      case "email":
        payload = emailChangeHandler(event.target.value);
        dispatch(email(payload));
        break;
      case "password":
        payload = passwordChangeHandler(event.target.value);
        dispatch(password(payload));
        break;
      case "confirmPassword":
        payload = confirmPasswordChangeHandler(event.target.value);
        dispatch(confirmPassword(payload));
        break;
      default:
        return '';
    }
  }

  const checkError = () => {
    for (var key in input) {
      if (
        input[key].value === "" ||
        input[key].value.length === 0
      ) {
      const payload = {key, error: true };
      dispatch(error(payload));
      return;
      }
    }
  }

  const registerHandler = (event) => {
    event.preventDefault();
    checkError();

    if (hasNoError(input)) {
      let existingData = getLocalStorage("existingData");
      if (existingData === null) {
        existingData = [];
      }
      let entryData = {
        "id": existingData.length + 1,
        "name": input.name.value,
        "date": input.date.value,
        "gender": input.gender.value,
        "email": input.email.value,
        "password": window.btoa(input.password.value),
        "status": "Added",
      }
      setLocalStorageItem("entryData", entryData);
      existingData.push(entryData);
      setLocalStorageItem("existingData", existingData);
      dispatch(registerActions.inputClear(defaultRegisterInput));
      navigate('/')
    }
  }

  const signinHandler = (event) => {
    event.preventDefault();
    dispatch(registerActions.inputClear(defaultRegisterInput));
    navigate('/');
  }

  const editHandler = (event) => {

  }

  return (
    <div className="form">
      <h2>Registration   {props.editForm ? <span className="close" onClick={props.closeForm }>X</span> : null} </h2>
    
      <InputComponent name="name"
        type="text"
        placeholder="Name"
        value={input.name.value}
        inputChange={inputChange} />
      {input.name.error && (
        <ErrorComponent message="Name must not be empty" />
      )}

      <InputComponent name="date"
        type="date"
        placeholder="Date"
        value={input.date.value}
        inputChange={inputChange}
      />
      {input.date.error && (
        <ErrorComponent message="Date must be before today"/>
      )}

      <p>Please select Gender</p>
      {listOfGenders.map((genderValue) => {
        return <InputComponent key={genderValue} type="radio" name="gender" placeholder={genderValue} value={genderValue} inputChange={inputChange}
        />
      })}
      <br />

      <InputComponent name="email"
        type="email"
        placeholder="Email"
        value={input.email.value}
        inputChange={inputChange}
      />
      {input.email.error && (
        <ErrorComponent message="Emai is already exists" />
      )}

      <InputComponent name="password"
        type="password"
        placeholder="Password"
        value={input.password.value}
        inputChange={inputChange}
      />
      {input.password.error && (
        <ErrorComponent message="Password must contains 8 characters" />
      )}

      <InputComponent name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={input.confirmPassword.value}
        inputChange={inputChange}
      />
      {input.confirmPassword.error && (
        <ErrorComponent message="Password not matched" />
      )}

      <ButtonContainerComponent>
        {props.buttonValue === "Edit" ?
          <ButtonComponent className="primary edit-primary"
            value={props.buttonValue}
            onClick={editHandler} />
          :
          <ButtonComponent className="primary"
            value="Register"
            onClick={registerHandler} />}


        {props.editForm ? null : <ButtonComponent className="secondary"
          value="Sign in"
          onClick={signinHandler} />}

      </ButtonContainerComponent>
    </div>
  );
};
export default RegisterForm;
