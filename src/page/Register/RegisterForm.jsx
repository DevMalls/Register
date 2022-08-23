import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerActions } from '../../store/registerSlice';
import { storeActions } from '../../store/storageSlice';
import { defaultRegisterInput } from '../../store/constants';
import { hasNoError, getLocalStorage, setLocalStorageItem, updateSingleItem, passwordChangeHandler, confirmPasswordChangeHandler,
nameChangeHandler, dateChangeHandler, genderChangeHandler, emailChangeHandler, isEmptyObject} from '../../utils/utilities';
const listOfGenders = ['Female', 'Male'];

const RegisterForm = (props) => {

  const input = useSelector((state) => state.registerSlice);
  const {name,date,gender,email,password,confirmPassword} = input;
  const {storeData,updateSpecificItem} = storeActions;
  const {nameAction,dateAction,genderAction,emailAction,passwordAction,confirmPasswordAction,error,inputClear,inputEdit} = registerActions;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let payload;

  useEffect(() => {
    (!(isEmptyObject(props)))
      ? fetchData()
      : dispatch(inputClear(defaultRegisterInput));
  }, [props.userData]);

  const fetchData = () => {
    dispatch(inputEdit(props.userData));
  }

  const inputChange = (event) => {
    switch (event.target.name) {
      case "name":
        payload = nameChangeHandler(event.target.value);
        dispatch(nameAction(payload));
        break;
      case "date":
        payload = dateChangeHandler(event.target.value);
        dispatch(dateAction(payload));
        break;
      case "gender":
        payload = genderChangeHandler(event.target.value);
        dispatch(genderAction(payload));
        break;
      case "email":
        payload = emailChangeHandler(event.target.value);
        dispatch(emailAction(payload));
        break;
      case "password":
        payload = passwordChangeHandler(event.target.value);
        dispatch(passwordAction(payload));
        break;
      case "confirmPassword":
        payload = confirmPasswordChangeHandler(event.target.value);
        dispatch(confirmPasswordAction(payload));
        break;
      default:
        return '';
    }
  }


  const registerHandler = (event) => {
    event.preventDefault();
    
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

    //confirmPasswordChangeHandler(password.value,confirmPassword.value);

    if (hasNoError(input)) {
      let existingData = getLocalStorage("existingData");
      if (existingData === null) {
        existingData = [];
      }
      let entryData = {
        "name": name.value,
        "date": date.value,
        "gender": gender.value,
        "email": email.value,
        "password": window.btoa(password.value),
        "status": "Added",
      }

      if(!(isEmptyObject(props))) {
          entryData = {
            ...entryData,
            "id": props.userData.id,         
        }
        setLocalStorageItem("entryData", entryData);
        dispatch(updateSpecificItem({id : props.userData.id,updatedData: entryData }));
        updateSingleItem(props.userData.id,entryData);       
        dispatch(inputClear(defaultRegisterInput));
        props.closeForm();
      } 
      else {
        entryData = {
          ...entryData,
          "id": existingData.length + 1,
        }        
        setLocalStorageItem("entryData", entryData);
        existingData.push(entryData);
        dispatch(storeData(entryData));
        setLocalStorageItem("existingData", existingData);
        dispatch(inputClear(defaultRegisterInput));
        navigate('/')
      } 

    }
  }

  const signinHandler = (event) => {
    event.preventDefault();
    dispatch(inputClear(defaultRegisterInput));
    navigate('/');
  }


  return (
    <div className="form">
      <h2>Registration   {props.editForm ? <span className="close" onClick={props.closeForm }>X</span> : null} </h2>
    
      <InputComponent name="name"
        type="text"
        placeholder="Name"
        value={name.value}
        inputChange={inputChange} />
      {name.error && (
        <ErrorComponent message="Name must not be empty" />
      )}

      <InputComponent name="date"
        type="date"
        placeholder="Date"
        value={date.value}
        inputChange={inputChange}
      />
      {date.error && (
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
        value={email.value}
        inputChange={inputChange}
      />
      {email.error && (
        <ErrorComponent message="Emai is already exists" />
      )}

      <InputComponent name="password"
        type="password"
        placeholder="Password"
        value={password.value}
        inputChange={inputChange}
      />
      {password.error && (
        <ErrorComponent message="Password must contains 8 characters" />
      )}

      <InputComponent name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword.value}
        inputChange={inputChange}
      />
      {confirmPassword.error && (
        <ErrorComponent message="Password not matched" />
      )}

      <ButtonContainerComponent>
        {props.buttonValue === "Edit" ?
          <ButtonComponent className="primary edit-primary"
            value={props.buttonValue}
            onClick={registerHandler} />
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
