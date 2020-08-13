import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-flow: column;
border: 2px solid #71AAC8;
border-radius: 4px;
padding: 8px;
width: fit-content;

  .cont {
    display: flex;
    flex-flow: row;
    align-items: center;
    width: fit-content;
    margin: 3px;

  }

  .display {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;
    line-height: 30px;
  }

  .pos {
    font-size: 26px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .solved {
    background-color: lightsalmon;
  }
  .search {
    background-color: grey;
  }
  .path {
    background-color: #71AAC8;
  }
  .text {
    margin: 0 0 0 4px;
  }

`

export default function Legend({ }) {


  return (
    <Wrapper>
      <div className="cont">
        <div className="display pos">S</div>
        <p className="text">Startpoint</p>
      </div>
      <div className="cont">
        <div className="display pos">X</div>
        <p className="text">Endpoint</p>
      </div>
      <div className="cont">
        <div className="display solved"></div>
        <p className="text">Node is solved.</p>
      </div>
      <div className="cont">
        <div className="display search"></div>
        <p className="text">Node is being searched.</p>
      </div>
      <div className="cont">
        <div className="display path"></div>
        <p className="text">Node is in the shortest path.</p>
      </div>

    </Wrapper>
  )
}