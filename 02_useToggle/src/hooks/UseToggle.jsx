import React from 'react'
import { useState } from 'react'

const UseToggle = (intialState =false) => {

    const [toggleState,setToggleState] = useState(intialState)

    const toggleFunc = ()=>{
        setToggleState((togg)=>!togg)
    }
  return (
    [toggleState,toggleFunc]
  )
}

export default UseToggle