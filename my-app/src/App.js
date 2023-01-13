import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import background from "./back.gif";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: large;
  text-align: center;
  }
`;

const Crystal = keyframes`
0% {
  rotate: 0deg;
  background: linear-gradient(217deg, rgba(20,0,200,.8), rgba(0,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(255,255,255,1), rgba(80,80,255,0.2) 70.71%),
  linear-gradient(336deg, rgba(70,110,255,.8), rgba(50,50,255,0.4) 70.71%);
  }
100% {
  rotate: 360deg;
  background: linear-gradient(217deg, rgba(20,0,200,.8), rgba(0,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(255,255,255,1), rgba(80,80,255,0.2) 70.71%),
  linear-gradient(336deg, rgba(70,110,255,.8), rgba(50,50,255,0.4) 70.71%);
  }
`;

const Light = keyframes`
0% {
  scale: 100%;
  }
  50% {
  scale: 150%;
  }
  100% {
  scale: 100%;
  }
`;

const FlexWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 15vh;
  position: fixed;
  @media only screen and (max-height: 800px){
    min-height: 20vh;
  }
`;

const Character = styled.div`
  margin: auto;
  width: 350px;
  height: 700px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
`;

const CrystalBall = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: cyan;
  animation-name: ${Crystal};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const LightEffect = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  margin-bottom: -200px;
  border-radius: 50%;
  background-color: cyan ;
  opacity: 0.2;
  background-image: none;
  animation-name: ${Light};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const HighLight = styled.div`
  margin: auto;
  width: 12px;
  height: 12px;
  margin-top: 50px;
  margin-bottom: -220px;
  padding-left: 20px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
  background-image: none;
  z-index: 1;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <FlexWrapper>
        <HighLight />
        <LightEffect/>
        <CrystalBall />
        <Character />
      </FlexWrapper>
    </>
  );
}
