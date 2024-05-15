import React, { useState } from 'react'

export default function Cau3() {
    const [color , setColor] = useState("black")
    const handleClick = () =>{
        setColor(prevColor => (prevColor === "black" ? "red" : "black"))
    }
  return (
    <div>
      Câu 3
      <p style={{color:color}}>Tiêu đề văn bản</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  )
}
