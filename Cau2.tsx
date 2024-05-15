import React, { useState } from 'react'

export default function Cau2() {
    const [product , setProduct] = useState({
        id : 1,
        name : "Coca Cola",
        price : 1000,
        quantity : 10,
    })
  return (
    <div>
      Câu 2 
      <p>Thông tin sản phẩm</p>
      <p>id : {product.id}</p>
      <p>name : {product.name}</p>
      <p>price : {product.price}</p>
      <p>quantity : {product.quantity}</p>
    </div>
  )
}
