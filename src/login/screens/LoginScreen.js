import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import "../Style.css";
import { loginActions } from "../../store/login/LoginActions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);

  useEffect(() => {
    console.log("user:", username);
  }, [username]);

  const loginSubmission = () => {
    console.log("submit clicked");
    dispatch(loginActions.loginRequest("Naveen"));
  };

  return (
    <div className="loginform-container">
      <h2 className="login-header">Login</h2>
      <div className="login-text">
        <TextField label="Username" variant="outlined" />
      </div>
      <div className="login-text">
        <TextField label="Password" variant="outlined" />
      </div>
      <button onClick={loginSubmission}>Login</button>
    </div>
  );
};

export default LoginScreen;
