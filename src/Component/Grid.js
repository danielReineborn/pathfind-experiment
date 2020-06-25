import React, { useState, useEffect } from "react";
import { makeGrid, startEndVertex, findPath, returnShortestPath } from "../Utils";
import styled from "styled-components";

import Node from "./Node";

const Container = styled.section`
  box-sizing: border-box;
  margin: 0px;
  height: ${props => props.y * 20}px;
  width: ${props => props.x * 20}px;
  display: flex;
  flex-flow: wrap;

  .grid {
    display: block;
    box-sizing: border-box;
    border: 1px solid black;
    height: 20px;
    width:20px;
    
  }

  .start {
    background-color: green;
  }
  .end {
    background-color: red;
  }
`


export default function Grid({ start, end, x, y, handleVertex }) {

  const [grid, updateGrid] = useState([]);

  useEffect(() => {

    let grid = makeGrid(x, y);
    if (start) grid[start].start = true;
    if (end) grid[end].end = true;

    updateGrid(grid);
    console.log("Update");
  }, [x, y, start, end])

  function onClick(e) {
    console.log(grid[e.target.id]);

    handleVertex(e);
    let newGrid = startEndVertex(x, y, start, end);
    updateGrid(newGrid);
  }

  function runPathFinder() {
    let endId = findPath(grid, start);
    //let path = returnShortestPath(grid, endId);

    console.log(returnShortestPath(grid, endId));
  }

  function setStart(e) {
    let node = e.target;
    console.log(node);
    /* let newGrid = [...grid];
    newGrid[] */
  }

  function setEnd(e) {

  }

  return (
    <>

      <Container x={x} y={y} className="gridCont">
        {grid.map((node, i) => {
          return <Node
            handleClick={onClick}
            node={node}
            key={i}
          />
        })}
      </Container>

      <button onClick={runPathFinder}>Start pathfinding!</button>
      <button onClick={setStart} className="start">Set start-vertex</button>
      <button onClick={setEnd} className="end">Set end-vertex</button>
    </>
  )
}