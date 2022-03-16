
import "./ColorPeaker.css";
import React, {useState} from "react";


const ColorPeaker = () => {
  const [valorColor, setvalorColor] = useState("#000");

return (
<div className="fondo d-flex justify-content-center" >
  <div className="colorimetro d-flex justify-content-center align-items-center" style={{backgroundColor: valorColor }} onChange={(e) => setvalorColor(e.target.value)} >
    <input type="color" ></input>
    <p className="valorColor ps-2 pt-3">{valorColor}</p>
  </div>
</div>

)
}

export default ColorPeaker
