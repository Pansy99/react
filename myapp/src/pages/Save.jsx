import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import '../pages/Save.css'
import src1 from '../static/images/readingBook.png'
import src2 from '../static/images/wx.jpg'
function Save() {
    const [isLongPress, setIsLongPress] = useState(false);
   
     useEffect(() => {
        let timer;
    
        const handleTouchStart = (e) => {
          timer = setTimeout(() => {
            setIsLongPress(true);
          }, 500); // 500 毫秒作为长按的判断时间，您可以根据需要调整
        };
    
        const handleTouchEnd = () => {
          clearTimeout(timer);
          setIsLongPress(false);
        };
    
        const handleMouseDown = (e) => {
          timer = setTimeout(() => {
            setIsLongPress(true);
          }, 500);
        };
    
        const handleMouseUp = () => {
          clearTimeout(timer);
          setIsLongPress(false);
        };
    
        // 添加触摸事件监听
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);
    
        // 添加鼠标事件监听
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
    
        // 组件卸载时移除事件监听
        return () => {
          document.removeEventListener('touchstart', handleTouchStart);
          document.removeEventListener('touchend', handleTouchEnd);
          document.removeEventListener('mousedown', handleMouseDown);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }, []);
    
      const handleSaveImage = () => {
        if (isLongPress) {
          const link = document.createElement('a');
          link.href = src1;
          link.download = 'image.jpg';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
    return (
        <div className="total">
        <div className="saving">
            <img 
             onContextMenu={handleSaveImage}
            style={{width:'300px'}}
            src={src1}/>
    <h2 className="message">
        长按保存到手机相册
    </h2>
    </div>
    <div className="wx">
    <img src={src2}
    
    style={{width:'100px'}}
     />
     </div>
    </div>
    )
}
export default Save;