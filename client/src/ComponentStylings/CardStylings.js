import styled from "styled-components";

export const CarouselContainer = styled.ul`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 1000px;
  top: 60px;
  scroll-behavior: smooth;
`;

export const CardWrapper = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  height: 280px;
  width: 300px;
  background-color: #17141d;
  border-radius: 50px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  :not(:first-child) {
    margin-left: -5px;
  }
  :hover {
    transform: translateY(-10px) translateX(-10px);
    transition: 0.4s ease-out;
  }
`;
export const Title = styled.p`
  color: white;
  font-weight: 100;
  left: 20px;
  top: 15px;
`;

export const UsersWrapper = styled.div`
  display: flex;
  width: auto;
`;

export const UserImage = styled.img`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  opacity: 60%;
  border-radius: 100%;
  :not(:first-child) {
    margin-left: -5px;
  }
`;
