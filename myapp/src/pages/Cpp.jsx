import { useState } from "react"

function ColorSwitch({onChangeColor}){
  return (
    <button onClick={(event)=>{
    event.stopPropagation()
    onChangeColor()}}>
      改变颜色
    </button>
  )
}
export default function  Cpp(){
  const [count,setCount]=useState(0)
  const handleClick=()=>{
         let bodystyle=document.body.style
         if(bodystyle.backgroundColor==='skyblue'){
           bodystyle.backgroundColor='pink'

         }
         else{
           bodystyle.backgroundColor='skyblue'
         }
  }
     return (
      <div 
      onClick={()=>setCount(count+1)}
      className="cpp">
        <ColorSwitch  onChangeColor={handleClick} />
        <h2>
          页面点击次数:{count}
        </h2>
      </div>
     )
}