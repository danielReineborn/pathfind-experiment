import React, { useReducer } from "react";
import styled from "styled-components";

import reducer from "../Reducers";
import { findPath2, returnShortestPath, showPath } from "../Utils";
import Node from "./Node";
import Toolbox from "./Toolbox";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`

const Container = styled.section`
box-sizing: border-box;
height: ${props => props.y * 30 + 2.5}px;
width: ${props => props.x * 30 + 2.5}px;
border: 1px solid #2D3641;
margin: ;
display: flex;
flex-flow: wrap;

  .pathfinder {
    position: absolute;
    top: 170px;
    left: 10px;
  }
`


export default function Grid({ start, end, x, y, firstGrid }) {
  const [state, dispatch] = useReducer(reducer, {
    grid: firstGrid,
    start: start,
    end: end,
    wallPaint: false,
    mousePress: false,
    eraseWall: false,
  })

  function runPathFinder() {

    findPath2(state.grid, state.start, dispatch)
      .then(id => {
        let path = returnShortestPath(state.grid, id);
        return path;
      })
      .then(path => {
        let foundPath = showPath(state.grid, path);
        dispatch({ type: "updateGrid", updateGrid: foundPath });

      })

  };

  return (
    <Wrapper>
      <Container x={x} y={y} className="gridCont">
        {state.grid.map((node, i) => {
          return <Node
            dispatch={dispatch}
            node={node}
            mousePress={state.mousePress}
            wallPaint={state.wallPaint}
            eraseWall={state.eraseWall}
            key={i}
          />
        })}
      </Container>
      <Toolbox runPathfinder={runPathFinder} dispatch={dispatch} wallPaint={state.wallPaint} eraseWall={state.eraseWall} />

    </Wrapper>



  )
}