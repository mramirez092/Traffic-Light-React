import React, { useState } from "react";
import Style from "../../styles/index.css"

//Se crea el estado "color" y la funcion setColor que inicializa en el color rojo por defecto
const TrafficLight = () => {
	const [color, setColor] = useState("red");
  
	//Función "handleClick" que actualiza el estado "color" según el color de la luz del semáforo que se haya presionado.
	const handleClick = (newColor) => {
	  setColor(newColor);
	};
  
	return (
		<><div class="sky">
		<div class="sun"></div>
		<div class="street-bottom"></div>
		<div className="text-center">
			<div className="upper-bar"></div>
			<div className="traffic-light">
				<div
					className={`red-light ${color === "red" ? "shine" : ""}`}
					onClick={() => handleClick("red")}
				></div>
				<div
					className={`yellow-light ${color === "yellow" ? "shine" : ""}`}
					onClick={() => handleClick("yellow")}
				></div>
				<div
					className={`green-light ${color === "green" ? "shine" : ""}`}
					onClick={() => handleClick("green")}
				></div>
			</div>
		</div>
		</div></>
	);
  };
  
  export default TrafficLight;

