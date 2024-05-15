import React, { useState } from 'react'

export default function Cau5() {
    const [inputValue , setInputValue] = useState("");
    const handleInput = (event : any) => {
        setInputValue(event.target.value);
    }
  return (
    <div>
        Cau 5
      <input type="text" placeholder='nhập nội dung' value={inputValue} onChange={handleInput}/>
      <p>{inputValue}</p>
    </div>
  )
}
