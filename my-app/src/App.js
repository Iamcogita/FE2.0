import { useState } from "react";
import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledButton = styled.button`
  background: white;
  border: 2px solid black;
  border-radius: 8px;
  background-color: transparent;
  width: 40px;
  height: 30px;
`;

const StyledTotal = styled.span`
  padding: 6px;
  color: ${(props) => `${props.color}`};
  border: ${(props) => `2px solid ${props.border}`};

  ${({ count }) => {
    if (count)
      return css`
        border-top: 2px solid red;
        border-bottom: 2px solid red;
      `;
    else
      return css`
        border-left: 2px solid blue;
        border-right: 2px solid blue;
      `;
  }}
`;

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: large;
  text-align: center;
}
`;

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <GlobalStyle />
      <StyledButton onClick={() => setCount(count - 1)}>-</StyledButton>{" "}
      <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
      <p />
      total:{" "}
      <StyledTotal
        border="yellow"
        count={count % 2 === 0}
        color={count < 0 ? "red" : "blue"}
      >
        {count}
      </StyledTotal>
    </>
  );
}
