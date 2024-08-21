import React from "react";
import { useState } from "react";
import '../index.css'
import { useRef } from "react";
import { useEffect } from "react";
import note from '../static/images/Note.png';
import src1 from '../static/music/music1.mp3';
import src2 from '../static/images/reopen.png';
import src3 from '../static/images/pause.png';
import src4 from '../static/images/plaint.png';
import src5 from '../static/images/flagPost.png';
import src6 from '../static/images/flag.png';
import src7 from '../static/images/panda.png';
import src8 from '../static/images/left.png';
import src9 from '../static/images/right.png';
import src10 from '../static/images/upper.png';
import src11 from '../static/images/door.png'
function Bpp(){
    const [show, setShow] = useState(false);
    const audioRef = useRef(null);
    const [left,setLeft]=useState(20)
    const [top,setTop]=useState(230)
    const pandaRefs = useRef([]);  // 创建一个 ref 数组来存储每个 panda 的 ref
    const [pandaCount,setPandaCount]=useState(1)
    const [flagTop,setFlagTop]=useState(260)
    const [showCard,setShowCard]=useState(false)
    const handleLeft=()=>{
        if(left<=0){
            setPandaCount(prevCount=>prevCount+1)
        }
        setLeft(left-20)
    }
    const handleRight=()=>{
        setLeft(left+20)
    }
    const handleTop=()=>{
        setTop(top-20)
    }
    const handleClick3=()=>{
   
      
        if(show===true){
            audioRef.current.pause()
        }
        if(show===false){
            audioRef.current.play()
        }
    
    setShow(!show)
}
const handleReopen = () => {
    setPandaCount(prevCount => prevCount + 1);
  };
  const handleClue=()=>{
      setShowCard(true)
  }
  const handleCancel=()=>{
      setShowCard(false)
  }
  useEffect(() => {  // 新增：使用 useEffect 监听 pandaCount 的变化
    setFlagTop(prevTop => prevTop -16 * (pandaCount - 1));  // 根据 pandaCount 调整 flagTop
  }, [pandaCount]);
  const pandaImages = [];
  for (let i = 0; i < pandaCount; i++) {
    pandaImages.push(
      <img
        key={i}
        className="panda"
        src={src7}
        style={{ position: 'absolute', left: `${left + i * 50}px`, top: `${top }px`, width: '80px',zIndex:99}}
      />
    );
  }

return (
    <div>
    <div 
    onClick={handleCancel}
    className={showCard ? 'mask':''}>

        <div className="header">
          <div>
            第3关
          </div>
          <div className="header-img">
          <img style={{width:'40px',height:'40px'}} src={src2} onClick={handleReopen}/>
          <img style={{width:'40px',height:'40px'}} src={src3} alt=""/>
          <img style={{width:'40px',height:'40px'}} src={src4}  onClick={handleClue} />
         </div>
       
        <div>
        <img 
        onClick={handleClick3}
         className={show?'img':''}
        style={{width:'40px',height:'40px'}}
        src={note} alt="note" 
        />
        <audio
        style={{display:'none'}}
        ref={audioRef}
        controls autoPlay={show}>
      <source src={src1} type="audio/mpeg"/>
     </audio>
        </div>
         </div>  
         <div className="center">
        <img src={src5} className="post" />
        <img style={{position:'absolute', 
            width: '80px', height:'50px' ,
            top: `${flagTop}px`,left:'440px'}} className="flag" src={src6} />
        {pandaImages}
        <img className="door" src={src11} />
      </div>
         <hr/>
         <div className="footer">
      <img src={src8}  onClick={handleLeft} width='60px'
      
      />
      <img src={src9}  onClick={handleRight} width='60px'
    
      />
      <img src={src10} onClick={handleTop} width='60px' 
     
      />
     </div>
     
    </div>
    {showCard &&<div className="clue">
        重开试试,攒够5人
       </div>}
       </div>
)
}
export default Bpp;
