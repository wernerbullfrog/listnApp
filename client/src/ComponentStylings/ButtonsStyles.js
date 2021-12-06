import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogInOutButton = styled.button``;

export const ProfileLinkButton = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 50px;
  transition: all 0.15s ease-in;
  :hover {
    color: rgb(222, 125, 241);
  }
`;

export const ListnLogoLinkButton = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 70px;
  transition: all 0.15s ease-in;
  :hover {
    color: rgb(222, 125, 241);
  }
`;

export const DesciptiveTxt = styled.span`
  color: white;
  font-size: 20px;
`;
