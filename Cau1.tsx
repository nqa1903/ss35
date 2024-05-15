import React, { useState } from 'react'

export default function Cau1() {
    const [name , setName] = useState<string>("Anh");
  return (
    <div>
      Câu 1
      <p>Họ và tên : {name}</p>
    </div>
  )
}
