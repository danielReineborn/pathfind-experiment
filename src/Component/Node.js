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

export default function Node({ handleClick, node }) {

  function onClick(e) {
    console.log(e.target.id);
    handleClick(e);
  }

  return (
    <Wrapper node={node}
      onClick={onClick}
      id={node.via}
    >
      {node.start ? <PlayArrowIcon fontSize="large" /> : node.end ? <ClearIcon fontSize="large" /> : null}
    </Wrapper>
  )
}