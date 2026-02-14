import React from "react";
import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="bottom-section">
        <h1 className="title">Welcome to PopX</h1>

        <p
          style={{ color: "#b7b9bc", fontSize: "18px", fontWeight: "500" }}
          className="subtitle"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <Button text="Create Account" onClick={() => navigate("/register")} />

        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </MobileLayout>
  );
};

export default Welcome;
