import React from "react";
import styled from "styled-components";
import ClearIcon from '@material-ui/icons/Clear';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Wrapper = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid #2D3641;
  height: 30px;
  width: 30px;
  font-size: 10px;
  background-color: ${props => props.node.color};
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
   
    font-size: 26px;
    font-weight: bold;
    :hover {
      cursor: pointer;
    }
  }

`

export default function Node({ handleClick, node, dispatch, wallPaint, mousePress, eraseWall }) {

  function onClick(e) {
    console.log(e.target.id);
    handleClick(e);
  }

  function handleDrop(e) {
    e.preventDefault();
    let start = e.dataTransfer.getData("start");
    let end = e.dataTransfer.getData("end");
    console.log("start", start, "end", end);
    if (start) {
      dispatch({ type: "newStart", newStart: e.target.id });
    } else {
      dispatch({ type: "newEnd", newEnd: e.target.id })
    }
  }

  function allowDrag(e) {
    e.preventDefault();

  }

  function handleMouseDown(e) {
    if (wallPaint) dispatch({ type: "mousePress", mousePress: true });
    if (eraseWall) dispatch({ type: "erase", wallNode: e.target.id });


  }
  function handleMouseMove(e) {
    if (mousePress) dispatch({ type: "wall", wallNode: e.target.id });
  }

  function handleMouseUp(e) {
    if (wallPaint) dispatch({ type: "mousePress", mousePress: false });
  }

  function handleDrag(e) {

    if (node.start) e.dataTransfer.setData("start", e.target.id);
    if (node.end) e.dataTransfer.setData("end", e.target.id);

    console.log(e.dataTransfer);

  }

  return (
    <Wrapper node={node}
      /* onClick={onClick} */
      id={node.via}
      onDragOver={allowDrag}
      onDrop={handleDrop}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {node.start ? <p
        className="icon"
        draggable="true"
        onDragStart={handleDrag}
        id={node.id}
        onClick={(e) => console.log(e.target)}
      >&Alpha;</p> :
        node.end ? <p
          className="icon"
          draggable="true"
          onDragStart={handleDrag}
          fontSize="large"
          id={node.id}
        >&Omega;</p> :
          null}
    </Wrapper>
  )
}