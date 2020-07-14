import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
  height: 30px;
  width: 30px;
  font-size: 10px;
  background-color: ${props => props.node.color}
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
    </Wrapper>
  )
}