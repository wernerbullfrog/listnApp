import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ProfileLinkButton } from "../ComponentStylings/ButtonsStyles";
import { LinkWrapper } from "../ComponentStylings/PageStyles";

const ProfileLink = () => {
  return (
    <LinkWrapper>
      <ProfileLinkButton to="/profile">
        <FaUserCircle />
      </ProfileLinkButton>
    </LinkWrapper>
  );
};

export default ProfileLink;
