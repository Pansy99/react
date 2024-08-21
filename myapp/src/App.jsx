import { useState } from "react";
import './index.css';
import { useRef } from "react";
import note from '../src/static/images/Note.png';
import src1 from '../src/static/music/music1.mp3';
import src2 from '../src/static/images/reopen.png';
import src3 from '../src/static/images/pause.png';
import src4 from '../src/static/images/plaint.png';
import src5 from '../src/static/images/gate.png';
import src6 from '../src/static/images/新ip.png';
import src7 from '../src/static/images/left.png';
import src8 from '../src/static/images/right.png';
import src9 from '../src/static/images/upper.png';
export default function App(){
   
    const [show,setShow]=useState(true)
    const audioRef=useRef(null)
    const runImgRef=useRef(null)
    const handleClick3=()=>{
   
      
            if(show===true){
                audioRef.current.pause()
            }
            if(show===false){
                audioRef.current.play()
            }
        
        setShow(!show)
    }
    const handleLeft=()=>{
        console.log('left')
        if(runImgRef.current){
            runImgRef.current.style.marginLeft = parseInt(runImgRef.current.style.marginLeft || 20) - 40 + 'px';
        }
    }
    const handleRight=()=>{
        console.log('right')
        if(runImgRef.current){
            runImgRef.current.style.marginLeft = parseInt(runImgRef.current.style.marginLeft || 20) + 40 + 'px';
        }
    }
    const handleUp=()=>{
        console.log('up')
        if(runImgRef.current){
            runImgRef.current.style.marginTop = parseInt(runImgRef.current.style.marginTop || 120) - 10 + 'px';
        }
    }
  
    return (
        <div className="App">
         <div className="header">
          <div>
            第1关
          </div>
          <div className="header-img">
          <img style={{width:'40px',height:'40px'}} src={src2} alt=""/>
          <img style={{width:'40px',height:'40px'}} src={src3} alt=""/>
          <img style={{width:'40px',height:'40px'}} src={src4} />
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
    <img 
    className="run"
    ref={runImgRef}
    src={src6} style={{width:'60px',height:'90px'}} />
    <img 
    className="gate"
    src={src5}
    style={{width:'180px'}}/>
   </div>
 

     <hr/>
     <div className="footer">
      <img src={src7}   width='60px'
      onClick={handleLeft}
      />
      <img src={src8}   width='60px'
      onClick={handleRight}
      />
      <img src={src9}  width='60px' 
      onClick={handleUp}
      />
     </div>
        </div>
    )
    
}   