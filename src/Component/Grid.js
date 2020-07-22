import React, { useState, useEffect } from "react";
import { makeGrid, startEndVertex, findPath2, returnShortestPath, showPath } from "../Utils";
import styled from "styled-components";

import Node from "./Node";

const Container = styled.section`
  box-sizing: border-box;
  height: ${props => props.y * 30 + 3}px;
  width: ${props => props.x * 30 + 3}px;
  border: 1px solid #E5EEDC;
  display: flex;
  flex-flow: wrap;
  margin: auto;
  margin-top: 55px;

  .pathfinder {
    position: absolute;
    top: 25px;
    left: 0px;
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
    let endId = findPath2(grid, start);


    let path = returnShortestPath(grid, endId);

    // gör en fn som tar arrayen och uppdaterar color till.

    /* console.log(returnShortestPath(grid, endId)); */
    let visualGrid = showPath(grid, path);

    updateGrid(visualGrid);
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
        <button className="pathfinder" onClick={runPathFinder}>Start pathfinding!</button>
      </Container>

    </>
  )
}