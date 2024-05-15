import React, { useState } from 'react'

export default function Cau10() {
    const [selected , setSelected] = useState([]);
    const handleCheckbox = (event:any)=>{
        const value = event.target.value;
        if(event.target.checked){
            setSelected([...selected, value]);
        }else{
            setSelected(selected.filter((item) => item !== value));
        }
    }
  return (
    <div>
      Câu 10 
      <div>
        <input type="checkbox" id="di choi" value="Đi chơi" onChange={handleCheckbox}/>
        <label htmlFor="di choi">Đi chơi</label>
      </div>
      <div>
        <input type="checkbox" id="code" value="Code" onChange={handleCheckbox}/>
        <label htmlFor="code">Code</label>
      </div>
      <div>
        <input type="checkbox" id="boi" value="Bơi lội" onChange={handleCheckbox}/>
        <label htmlFor="boi">Bơi lội</label>
      </div>
      <div>
        <input type="checkbox" id="nhay day" value="Nhảy dây" onChange={handleCheckbox}/>
        <label htmlFor="nhay day">Nhảy dây</label>
      </div>
      <p>Sở thích : [{selected.join(' , ')}]</p>
    </div>
  )
}
