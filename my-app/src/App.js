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
  scale: 100%;
}
50% {
  rotate: 180deg;
  scale: 150%;
}
100% {
  rotate: 360deg;
  scale: 100%;
}
`;

const Light = keyframes`
0% {
  scale: 100%;
  }
50% {
  scale: 160%;
  }
100% {
  scale: 100%;
  }
`;

const Spot = keyframes`
0% {
  top: 240px;
  scale: 100%;
  opacity: 1;
  }
50% {
  top: 230px;
  scale: 200%;
  opacity: 0.5;
  }
100% {
  top: 240px;
  scale: 100%;
  opacity: 1;
  }
`;

const FlexWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 15vh;
  position: fixed;
  @media only screen and (max-height: 800px) {
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
  background: linear-gradient(
      217deg,
      rgba(20, 20, 200, 0.4),
      rgba(0, 0, 0, 0) 70.71%
    ),
    linear-gradient(
      127deg,
      rgba(255, 255, 255, 0.3),
      rgba(80, 80, 255, 0.2) 70.71%
    ),
    linear-gradient(
      336deg,
      rgba(70, 180, 255, 0.5),
      rgba(50, 120, 255, 0.4) 70.71%
    );
  animation-name: ${Crystal};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const LightEffect = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  margin-bottom: -200px;
  border-radius: 50%;
  background-color: cyan;
  opacity: 0.2;
  animation-name: ${Light};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const HighLight = styled.div`
  margin: auto;
  margin-top: 50px;
  position: relative;
  width: 12px;
  height: 12px;
  padding-left: 20px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
  z-index: 1;
  animation-name: ${Spot};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <FlexWrapper>
        <HighLight />
        <LightEffect />
        <CrystalBall />
        <Character />
      </FlexWrapper>
    </>
  );
}
