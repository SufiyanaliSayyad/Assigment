import React from "react";
import { useForm } from "react-hook-form";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/account");
  };

  return (
    <MobileLayout>
      <h1>Signin to your PopX account</h1>

      <p
        style={{ color: "#b7b9bc", fontSize: "18px", fontWeight: "500",marginBottom:"20px" }}
        className="subtitle"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email Address"
          placeholder="Enter email address"
          {...register("email", { required: "Email is required" })}
          error={errors.email}
          required
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          {...register("password", { required: "Password is required" })}
          error={errors.password}
          required
        />

        <Button text="Login" variant="login" type="submit" />
      </form>
    </MobileLayout>
  );
};

export default Login;
