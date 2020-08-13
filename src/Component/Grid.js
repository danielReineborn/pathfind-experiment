import React, { useState, useReducer } from "react";
import styled from "styled-components";

import reducer from "../Reducers";
import { makeGrid, startEndVertex, findPath2, returnShortestPath, showPath } from "../Utils";
import Node from "./Node";

const Container = styled.section`
  box-sizing: border-box;
  height: ${props => props.y * 30 + 2.5}px;
  width: ${props => props.x * 30 + 2.5}px;
  border: 1px solid black;
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


export default function Grid({ start, end, x, y, handleVertex, firstGrid }) {

  const [grid, updateGrid] = useState(firstGrid);

  const [state, dispatch] = useReducer(reducer, {
    grid: firstGrid,
    start: start,
    end: end,
  })



  /* useEffect(() => {

    let grid = makeGrid(x, y);
    if (start) grid[start].start = true;
    if (end) grid[end].end = true;

    updateGrid(grid);
    console.log("Update");
  }, [x, y, start, end]) */

  function onClick(e) {
    console.log(grid[e.target.id]);

    handleVertex(e);
    let newGrid = startEndVertex(x, y, state.start, state.end);
    updateGrid(newGrid);
  }

  function runPathFinder() {
    let endId = findPath2(grid, state.start);


    let path = returnShortestPath(grid, endId);

    // gör en fn som tar arrayen och uppdaterar color till.

    /* console.log(returnShortestPath(grid, endId)); */
    let visualGrid = showPath(grid, path);

    updateGrid(visualGrid);
  }

  function updater(newStart) {
    if (grid[start].start === grid[newStart].start) return;

    let newGrid = [...grid];
    newGrid[start].start = false;
    newGrid[newStart].start = true;
    updateGrid(newGrid);

  }

  return (
    <>

      <Container x={x} y={y} className="gridCont">
        {state.grid.map((node, i) => {
          return <Node
            handleClick={onClick}
            dispatch={dispatch}
            node={node}
            key={i}
            updateStart={updater}
          />
        })}
        <button className="pathfinder" onClick={runPathFinder}>Start pathfinding!</button>
      </Container>

    </>
  )
}