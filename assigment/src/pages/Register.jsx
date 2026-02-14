import React from "react";
import { useForm } from "react-hook-form";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agency: "yes",
    },
  });

  // const agencyValue = watch("agency");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <MobileLayout>
      <h1 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Create your PopX account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Full Name"
          {...register("fullName", { required: "Full Name is required" })}
          error={errors.fullName}
          required
        />
        <InputField
          label="Phone number"
          {...register("phone", { required: "Phone number is required" })}
          error={errors.phone}
          required
        />
        <InputField
          label="Email address"
          {...register("email", { required: "Email address is required" })}
          error={errors.email}
          required
        />
        <InputField
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={errors.password}
          required
        />
        <InputField label="Company name" {...register("companyName")} />

        <p className="agency-label">
          Are you an Agency?<span className="required">*</span>
        </p>

        <div className="radio-group">
          <label className="radio-container">
            <input type="radio" value="yes" {...register("agency")} />
            <span className="custom-radio"></span>
            Yes
          </label>

          <label className="radio-container">
            <input type="radio" value="no" {...register("agency")} />
            <span className="custom-radio"></span>
            No
          </label>
        </div>

        <Button text="Create Account" type="submit" />
      </form>
    </MobileLayout>
  );
};

export default Register;
