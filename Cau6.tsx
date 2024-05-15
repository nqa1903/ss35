import React, { useState } from 'react'

export default function Cau6() {
    const [count , setCount] = useState(0);
    const handleIncrease = () =>{
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrease = () =>{
        setCount(prevCount => prevCount - 1);
    }
  return (
    <div>
      Cau 6
      <p>Bạn đã click {count} lần</p>
      <button onClick={handleIncrease}>Click để tăng</button>
      <button onClick={handleDecrease}>Click để giảm</button>
    </div>
  )
}
