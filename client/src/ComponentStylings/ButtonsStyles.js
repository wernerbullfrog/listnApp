import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BasicButton = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  margin: 10px;
  background-color: rgb(222, 125, 241);
  color: black;
  border: rgb(222, 125, 241) solid;
  border-radius: 40px;
  transition: all 0.15s ease-in;
  :hover {
    color: rgb(222, 125, 241);
    background-color: black;
    border: solid rgb(222, 125, 241);
  }
`;

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

export const DesciptiveTxt = styled.p`
  color: white;
  font-size: 20px;
`;

export const SubmitButton = styled.input.attrs({
  type: "submit",
})``;
