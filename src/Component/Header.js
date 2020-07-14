import React, { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.header`
  height: 150px;
  background-color: #2D3641;

`

export default function Header({ setVertex }) {



  return (
    <Wrapper>
      <button onClick={() => setVertex(true)} className="start">Set start-vertex</button>
      <button onClick={() => setVertex(false)} className="end">Set end-vertex</button>
    </Wrapper>
  )
}