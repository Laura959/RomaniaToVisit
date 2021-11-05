import { useState } from "react";
import { useForm } from "react-hook-form";
import { CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../../../reducers/rootReducer";
import {
  login,
  checkIfUserAdmin,
} from "../../../actions/authenticationActions/autActionCreators";

import "./Login.css";

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentification.isUserAuthenticated
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        setIsFormSubmitted(true);
        dispatch(checkIfUserAdmin(data.username));
        dispatch(login(data));
      })}
    >
      <CardHeader title="Login here" className="title" />
      <label htmlFor="username">Username:</label>
      <input
        {...register("username", { required: "Username field is required" })}
        id="username"
        onChange={() => setIsFormSubmitted(false)}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <label htmlFor="password">Password:</label>
      <input
        {...register("password", {
          required: "Password field is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
        id="password"
        type="password"
        onChange={() => setIsFormSubmitted(false)}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button className="formBtn">Submit</button>
      {!isAuthenticated && isFormSubmitted && <p>Wrong username or password</p>}
      {isAuthenticated && <Redirect to="/visit-spots" />}
    </form>
  );
};

export default Login;
