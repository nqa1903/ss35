import React, { useState } from 'react'

export default function Cau7() {
    const [text , setText] = useState("");
    const handleText = (event:any) => {
        setText(event.target.value);
    }
  return (
    <div>
        Cau 7
      <input type="text" onChange={handleText} value={text}/>
      <p>số ký tự : {text.length}</p>
    </div>
  )
}
