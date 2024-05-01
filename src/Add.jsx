import React, { forwardRef, useRef, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import List from "./List";
import { dataSet, dataGet, wholeSet } from "./Data/DataSaver";

const Add = () => {
	const childRef = useRef();
	// Use state is Defined here
	const [todoText, setText] = useState({
		todoTextBox: "",
		Date: null,
	});

	const [todoList, setTodoList] = useState(new Array());

	// Button Click Function
	const getTodo = (event) => {
		//	event.preventDefault();

		/// Pushing Data intgo ArrAy
		if (todoText.todoTextBox != "") {
			todoList.push(todoText);
			console.log("todo list  nnnn:    " + JSON.stringify(todoList));
			setTodoList([]);
			// clasring useState
			setText({ todoTextBox: "", Date: null });
			saveData();
		} else window.alert("Fill the data first");
	};

	// OnChange function  store data in useState hooks
	const chng = (event) => {
		const { name, value } = event.target;
		//call use state function ..
		setText((preVal) => {
			return { ...preVal, [name]: value, Date: new Date() };
		});
	};

	// Saving in locsal storage
	const saveData = () => {
		dataSet(todoList);
		console.log(dataGet());
	};

	const edit = (index, arr) => {
		console.log("Edit function call  ");
		console.log("Index:  " + index);
		console.log(arr[index].todoTextBox);
  let dt = arr[index].todoTextBox;
		setText((preval)=>{
			return { ...preval,todoTextBox:dt}
		})

		console.log("call");
		arr.splice(index,1);
		wholeSet(arr);
		childRef.current.up();
	};

	return (
		<div className="form">
			<div className="addDiv">
				<input
					type="text"
					name="todoTextBox"
					className="addArea"
					onChange={chng}
					value={todoText.todoTextBox}
					placeholder="Add Task"
				/>
				<button
					onClick={() => {
						getTodo();
						childRef.current.up();
					}}
				>
					<MdOutlineAddBox />
				</button>
			</div>
			<List ref={childRef} editFunction={edit} />
		</div>
	);
};

export default Add;
