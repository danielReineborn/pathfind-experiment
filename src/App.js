import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import { makeGrid } from "./Utils";

import Header from "./Component/Header";
import Grid from "./Component/Grid";


const Main = styled.main`

`

function App() {
  /* 
    const [grid, setGrid] = useState([]);
  
    useEffect(() => {
      let grid = makeGrid(32, 24);
      setGrid(grid);
    }, []) */


  const [vertex, setVertex] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function handleVertex(e) {
    if (vertex) {
      console.log(e.target.id);
      let startVertex = e.target.id;
      setStart(startVertex);
      setVertex(null);
    } else if (vertex === false) {
      let endVertex = e.target.id;
      console.log(e.target.id);

      setVertex(null);
      setEnd(endVertex);
    }

    console.log(start, end);

  }


  return (
    <Main>
      <Header setVertex={setVertex} />


      <Grid handleVertex={handleVertex} /* grid={grid} */ start={start} end={end} x={32} y={24} />
    </Main>
  );
}

export default App;
