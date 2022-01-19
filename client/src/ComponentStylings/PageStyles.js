import styled from "styled-components";

//******************************************/
// ************** DIVS ********************/
//******************************************/
export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px;
  box-shadow: 0px 10px 24px -10px rgba(255, 255, 255, 0.36);
`;

export const LinkWrapper = styled.div`
  margin: 0;
  transition: all 0.15s ease-in;
  :hover {
    color: rgb(222, 125, 241);
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const WelcomeWrapper = styled.div`
  width: 75vw;
  height: fit-content;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -3em;
`;

export const TextWrapper = styled.div`
  width: 40vw;
`;

export const BasicWrapper = styled.div``;

//******************************************/
// ************** TXTS ********************/
//******************************************/
