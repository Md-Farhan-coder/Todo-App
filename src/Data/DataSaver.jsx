const dataSet = (todoList) => {
	console.log("call save data");
	let data = dataGet();
	if (data) {
		var oldData = data;
		////	console.log("old:    " + JSON.stringify(oldData));
	} else {
		oldData = [];
	}
	//console.log("todo list :    "+JSON.stringify(todoList) );
	const newData = [...oldData, ...todoList];

	localStorage.setItem("todoListArray", JSON.stringify(newData));
	//  console.log("new:    "+JSON.stringify(newData));
};

const dataGet = () => {
	console.log("call get data");

	let tmp=localStorage.getItem("todoListArray");

    // console.log(tmp);
     return JSON.parse(localStorage.getItem("todoListArray"));
    
};

const wholeSet = (data) => {
	console.log("call whole set data");
   // localStorage.clear();
	localStorage.setItem("todoListArray", JSON.stringify(data));
};

export { dataSet, dataGet, wholeSet };
