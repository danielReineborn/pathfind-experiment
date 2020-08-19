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
  }

`

export default function Toolbox({ runPathfinder, dispatch }) {

  return (
    <Wrapper>
      <button className="btn" onClick={runPathfinder}>Start visualiser</button>
      <button className="btn" onClick={() => dispatch({ type: "wallPaint", wallPaint: true })}>Set wall</button>
      <button className="btn" onClick={() => dispatch({ type: "eraseWall", eraseWall: true })}>Erase wall.</button>
      <button className="btn" onClick={() => dispatch({ type: "wallPaint", wallPaint: false })}>Pause wall</button>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>Reset Grid</button>



    </Wrapper>
  )
}