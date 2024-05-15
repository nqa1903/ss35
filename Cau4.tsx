import React, { useState } from 'react'

export default function Cau4() {
    const [visible , setVisible] = useState<boolean>(true);
    const toggleClick = () => {
        setVisible(prevVisible => !prevVisible);
    }
  return (
    <div>
      Câu 4
      <button onClick={toggleClick}>{visible ? "Ẩn" : "Hiển"}</button>
      <p>{visible ? "Tiêu đề văn bản" : ""}</p>
    </div>
  )
}
