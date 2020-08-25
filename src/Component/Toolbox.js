import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px;
  position: relative;
  display: flex;
  height: 200px;
  width: 700px;
  border-top: 2px solid #2D3641;
  padding: 15px;
  .btn {
    height: 45px;
    width: 75px;
    margin: 2px;
    :hover {
      cursor: pointer;
    }
  }

  .wall {
    background-color: ${props => props.wall ? "lightgreen" : ""};
  }
  .erase {
    background-color: ${props => props.erase ? "lightgreen" : ""};
  }

`

export default function Toolbox({ runPathfinder, dispatch, wallPaint, eraseWall }) {

  return (
    <Wrapper wall={wallPaint} erase={eraseWall}>
      <button className="btn" onClick={runPathfinder}>Start visualiser</button>
      <button className="btn wall" onClick={() => dispatch({ type: "wallPaint", wallPaint: !wallPaint })}>Set wall</button>
      <button className="btn erase" onClick={() => dispatch({ type: "eraseWall", eraseWall: !eraseWall })}>Erase wall.</button>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>Reset Grid</button>
    </Wrapper>
  )
}