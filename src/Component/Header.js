import React, { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.header`
  height: 250px;
  background-color: #4B748B;

`

export default function Header({ setVertex }) {



  return (
    <Wrapper>
      <button onClick={() => setVertex(true)} className="start">Set start-vertex</button>
      <button onClick={() => setVertex(false)} className="end">Set end-vertex</button>
    </Wrapper>
  )
}