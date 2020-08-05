import React from "react";
import styled from "styled-components";
import ClearIcon from '@material-ui/icons/Clear';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Wrapper = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
  height: 30px;
  width: 30px;
  font-size: 10px;
  background-color: ${props => props.node.color};
  display: flex;
  justify-content: center;
  align-items: center;

`

export default function Node({ handleClick, node, dispatch }) {

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

  function handleDrag(e) {

    if (node.start) e.dataTransfer.setData("start", e.target.id);
    if (node.end) e.dataTransfer.setData("end", e.target.id);

    console.log(e.dataTransfer);

  }

  function handleDragLeave(e) {
    e.preventDefault();

  }



  return (
    <Wrapper node={node}
      /* onClick={onClick} */
      id={node.via}

      onDragOver={allowDrag}
      onDrop={handleDrop}

    >
      {node.start ? <p
        draggable="true"
        onDragStart={handleDrag}
        fontSize="large"
        id={node.id}
        onClick={(e) => console.log(e.target)}
      >S</p> :
        node.end ? <ClearIcon
          draggable="true"
          onDragStart={handleDrag}
          fontSize="large"
          id={node.id}
        /> :
          null}
    </Wrapper>
  )
}