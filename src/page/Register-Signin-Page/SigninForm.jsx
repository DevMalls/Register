import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useSelector } from "react-redux";
import "./style.css";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const SigninForm = () => {
  const input = useSelector((state) => state);

  return (
    <div className="form">
      <h2>Sign in</h2>
      <InputComponent
        type={"email"}
        name={"userEmail"}
        placeholder={"Email"}
        value={input.signInSlice.userEmail.value}
      />
       {input.signInSlice.userEmail.error && (
        <ErrorComponent message={"Invalid Email"} />
      )}
      <InputComponent
        type={"password"}
        name={"userPassword"}
        placeholder={"Password"}
        value={input.signInSlice.userPassword.value}
      />
       {input.signInSlice.userPassword.error && (
        <ErrorComponent message={"Password must contain 8 characters"} />
      )}
      <ButtonContainerComponent
        primaryValue={"Sign in"}
        secondaryValue={"Register"}
      />
    </div>
  );
};
export default SigninForm;
