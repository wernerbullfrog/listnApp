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

export const ModalCardBtn = styled.button`
  width: 100px;
  height: 35px;
  cursor: pointer;
  font-size: large;
  font-weight: thin;
  margin: 10px;
  background-color: rgba(255, 141, 75, 0.3);
  color: black;
  border: rgba(255, 141, 75, 0.6) solid thin;
  border-radius: 30px;
  transition: all 0.15s ease-in;
  :hover {
    color: rgba(255, 141, 75, 0.62);
    background-color: transparent;
    border: solidrgba(255, 141, 75, 0.7);
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
