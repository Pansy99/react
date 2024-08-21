import React, { useState, useRef } from "react";
import './Third.css'
import src1 from '../../static/images/light.png'
import src2 from '../../static/images/close.png'
import src3 from '../../static/images/open.png'
import src4 from '../../static/images/新ip.png'
import src5 from '../../static/images/flag1.png'
import src6 from '../../static/images/left.png'
import Epp from "../../components/Epp";

function Third() {
    const [position, setPosition] = useState({ x: 430, y: 300 });
    const elementRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(430);
    const [startY, setStartY] = useState(300);

    const [doorSrc, setDoorSrc] = useState(src2)

    const handleTouchStart = (e) => {
       
            e.stopPropagation();
            setIsDragging(true);
            const touch = e.touches[0];
            setStartX(touch.clientX - elementRef.current.offsetLeft);
            setStartY(touch.clientY - elementRef.current.offsetTop);
  
    };

    const handleTouchMove = (e) => {
       
            e.stopPropagation();
            const touch = e.touches[0];
            const newPosition = { x: touch.clientX - startX, y: touch.clientY - startY };
            setPosition(newPosition);

            if (newPosition.y <= 170) {
                setDoorSrc(src3);
            } else {
                setDoorSrc(src2);
            }
        }
  

    const handleTouchEnd = (e) => {
 
            e.stopPropagation();
            setIsDragging(false);
  
    };

    return (
      
            <div 
                style={{overflow:'hidden'}}
                className="container">
                <img
                    className="ip"
                    src={src4} width="100px"/>
                <img 
                    className="light"
                    src={src1} alt="light"  height="300px" />
                
                <img 
                       ref={elementRef}
                       onTouchStart={handleTouchStart}
                       onTouchMove={handleTouchMove}
                       onTouchEnd={handleTouchEnd}
                       style={{position:"absolute",left:position.x,
                           top:position.y}}
                    className="flag1" src={src5} height="60px"/>
                
                <img 
                    width="180px"
                    className="door"
                    src={doorSrc}  />
            </div>
  
    )
}
export default Third;