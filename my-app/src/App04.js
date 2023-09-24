import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-color: orange;
  border-radius: 50%;
`

const ColoredCircle = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.bgColor ? props.bgColor : "red"};
  border-radius: 50%;
`

function App(){

  return <>
    <Circle />
    <ColoredCircle />
    <ColoredCircle bgColor="orange"/>
    <ColoredCircle bgColor="tomato"/>
    <ColoredCircle bgColor="purple"/>
  </>
}

export default App