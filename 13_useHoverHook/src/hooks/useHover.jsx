import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const useHover = () => {


    const [isHovered,setIshovered]= useState(false)
const ref = useRef(null) //emtpy

const handleMouseOver =()=> setIshovered(true)
const handleMouseOut =()=> setIshovered(false)


useEffect(()=>{
    const element = ref.current;
    if(!element) return
    if(element) {
        element.addEventListener ('mouseover' ,handleMouseOver)
        element.addEventListener('mouseout',handleMouseOut)
    }

     return () => {
       element.removeEventListener("mouseover", handleMouseOver);
       element.removeEventListener("mouseout", handleMouseOut);
     };

},[])

  return (
   [ref,isHovered]
  )
}

export default useHover