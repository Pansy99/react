import React from "react";
import { useState } from "react";
import { useRef } from "react";
function Epp(){
  const [position,setPosition]=useState({x:0,y:0});
  const  elementRef=useRef(null);
  const [isDragging,setIsDragging]=useState(false);
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const handleMouseDown=(e)=>{
    e.preventDefault();
    setIsDragging(true);
    setX(e.clientX-elementRef.current.offsetLeft);
    setY(e.clientY-elementRef.current.offsetTop);
  }
  const handleMouseMove=(e)=>{
    if(isDragging){
      setPosition({x:e.clientX-x,y:e.clientY-y});
    }
    }
    const handleMouseUp=()=>{
      setIsDragging(false);
    }
     return (
         <div
         ref={elementRef}
         className="draggable"
         style={{position:"absolute",left:position.x,
          top:position.y,
          height:'200px',
          width:'200px',
          backgroundColor:'red',
          position:'fixed'
        }}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp}
         >

         </div>
     )
}
export default Epp;