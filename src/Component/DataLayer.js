import React, { useState } from "react";
import styled from "styled-components";

import { makeGrid } from "../Utils";
import Grid from "./Grid";
import Header from "./Header";

const Main = styled.main`
box-sizing: border-box;
background-color: #ffffff;
min-height: 100vh;
`


export default function DataLayer() {

  const x = 50;
  const y = 20;
  const start = 154;
  const end = 160;
  const grid = makeGrid(x, y);


  return (
    <Main>
      <Header />
      <Grid firstGrid={grid} x={x} y={y} start={start} end={end} />
    </Main>
  )
}