import React from "react";
import MobileLayout from "../components/MobileLayout";
import "../styles/account.css";
import { FaCamera } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <MobileLayout>
      <div className="account-header">Account Settings</div>

      <div className="account-body">
        <div className="profile-row">
          <div className="image-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="profile-image"
              alt="profile"
            />

            <div className="camera-icon">
              <FaCamera />
            </div>
          </div>

          <div>
            <div className="profile-name">Marry Doe</div>

            <div className="profile-email">Marry@gmail.com</div>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="divider"></div>
      </div>
    </MobileLayout>
  );
};

export default AccountSettings;
