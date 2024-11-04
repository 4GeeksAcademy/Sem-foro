import React from "react";

//include images into your bundle
import Semaforo from "./semaforo";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center m-5">Semáforo con UseState:</h1>
			<Semaforo/>
		</div>
	);
};

export default Home;
