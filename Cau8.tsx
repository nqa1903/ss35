import React, { useState } from 'react'

export default function Cau8() {
    const [city , setCity] = useState('');
    const handleCityChange = (event:any) =>{
        setCity(event.target.value);
    }
  return (
    <div>
      Câu 8 
      <p>Thành phố : {city}</p>
      <select value={city} onChange={handleCityChange}>
        <option value="">---Chọn thành phố---</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  )
}
