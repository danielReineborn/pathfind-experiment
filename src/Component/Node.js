import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
  height: 20px;
  width: 20px;
  font-size: 10px;
  background-color: ${props => props.node.start ? "green" : props.node.end ? "red" : "white"}
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
    >{node.id}
    </Wrapper>
  )
}