import React, { useState } from 'react'
import { Button, ButtonGroup,Stack } from '@chakra-ui/react'
const Counter = () => {
       const [counter,setCounter]=useState(0);
  const increaseme=()=>{
       setCounter(counter+1);
  }
  const decreaseme=()=>{
       setCounter(counter-1);
  }
  const reset=()=>{
       setCounter(0);
  }
  return (
    <div>
      <h1>{counter}</h1>
      
      <Button colorScheme='blue' onClick={increaseme}>increase</Button>
      <Button colorScheme='blue' onClick={decreaseme}>decrease</Button>
      <Button colorScheme='blue' onClick={reset}>reset</Button>

     
    </div>
  )
}

export default Counter
