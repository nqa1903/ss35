import React, { useState } from 'react';

export default function Cau9() {
  const [sex, setSex] = useState('');

  const handleSexChange = (event:any) => {
    setSex(event.target.value);
  };

  return (
    <div>
        Câu 9
      <p>Giới tính: {sex}</p>
      <div>
        <input 
          type="radio" 
          id="nam" 
          value="Nam" 
          onChange={handleSexChange} 
          checked={sex === "Nam"} 
        />
        <label htmlFor="nam">Nam</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="nu" 
          value="Nữ" 
          onChange={handleSexChange} 
          checked={sex === "Nữ"} 
        />
        <label htmlFor="nu">Nữ</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="khac" 
          value="Khác" 
          onChange={handleSexChange} 
          checked={sex === "Khác"} 
        />
        <label htmlFor="khac">Khác</label>
      </div>
    </div>
  );
}
