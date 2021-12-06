import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  ProfileLinkButton,
  DesciptiveTxt,
} from "../ComponentStylings/ButtonsStyles";
const ProfileLink = () => {
  return (
    <ProfileLinkButton to="/profile">
      <FaUserCircle>
        {" "}
        <DesciptiveTxt>Profile</DesciptiveTxt>
      </FaUserCircle>
    </ProfileLinkButton>
  );
};

export default ProfileLink;
