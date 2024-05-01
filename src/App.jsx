import React from "react";
import heagbg from "./assets/header-bg.jpg";
import "./index.css";
import Add from "./Add";

const App = () => {
	return (
		<>
			<div className="headBg">
				<h1 className="title">Todo App</h1>
				<img src={heagbg} alt="head" />
			</div>
			<Add />
		
		</>
	);
};

export default App;
