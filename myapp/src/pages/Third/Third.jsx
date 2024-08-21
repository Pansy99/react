import React from "react";
import { useState } from "react";
import './Third.css'
import { useRef } from "react";
import src1 from '../../static/images/light.png'
import src2 from '../../static/images/close.png'
import src3 from '../../static/images/open.png'
import src4 from '../../static/images/新ip.png'
import src5 from '../../static/images/flag1.png'
import Epp from "../../components/Epp";
function Third(){
    const [position,setPosition]=useState({x:430,y:300});
  const  elementRef=useRef(null);
  const [isDragging,setIsDragging]=useState(false);
  const [x,setX]=useState(430);
  const [y,setY]=useState(300);
  
  const [doorSrc,setDoorSrc]=useState(src2)
    const handleMouseDown=(e)=>{
        e.preventDefault();
        setIsDragging(true);
        setX(e.clientX-elementRef.current.offsetLeft);
        setY(e.clientY-elementRef.current.offsetTop);
      }
      const handleMouseMove=(e)=>{

        if(isDragging){
          const newPosition={x:e.clientX-x,y:e.clientY-y}
          setPosition(newPosition)
          console.log(newPosition)
          if(newPosition.y <=170){
            
             setDoorSrc(src3)
          }
          else{
            setDoorSrc(src2)
          }
        }
        }
        const handleMouseUp=( )=>{
   
          setIsDragging(false);
        }
    return (
       <div >
        <div    
        
        className="container">
            <img
            className="ip"
            src={src4} width="100px"/>
        <img 
        className="light"
        src={src1} alt="light"  height="300px" />
        <img 
           ref={elementRef}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
           onMouseUp={handleMouseUp}
           style={{position:"absolute",left:position.x,
            top:position.y}}
        className="flag1" src={src5} height="60px"/>
        <img 
        width="180px"
        className="door"
        src={doorSrc}  />
 
        </div>
       </div>
    )
}
export default Third