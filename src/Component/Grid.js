import React, { useState, useEffect } from "react";
import { makeGrid, startEndVertex, findPath, returnShortestPath } from "../Utils";
import styled from "styled-components";

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
    console.log(start, end);

    let grid = makeGrid(x, y);

    updateGrid(grid);
  }, [start, end, x, y])

  function onClick(e) {
    console.log(grid[e.target.id].connected);


    handleVertex(e);
    let newGrid = startEndVertex(x, y, start, end);
    updateGrid(newGrid);
  }

  function runPathFinder() {
    let endId = findPath(grid, start);
    //let path = returnShortestPath(grid, endId);

    console.log(returnShortestPath(grid, endId));
  }

  return (
    <>

      <Container x={x} y={y} className="gridCont">
        {grid.map((x, i) => {
          return <div onClick={onClick} className={x.start ? "grid start" : x.end ? "grid end" : "grid"} id={i} key={i}></div>
        })}
      </Container>

      <button onClick={runPathFinder}>Start pathfinding!</button>

    </>
  )
}