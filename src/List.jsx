import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { dataGet, dataSet, wholeSet } from "./Data/DataSaver";


const List = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => {
		console.log("hellll      ");
		return { up: update };
	});

	////useState store retriving data
	const [data, setData] = useState([" "]);

	// use effect stotre data once
	useEffect(() => {
		let dataE = dataGet();
		if (dataE) {
			setData(dataGet());
			console.log("render data");
		} else {
			setData([]);
			console.log("effect");
		}
	}, []);

	const update = () => {
		const tmp = dataGet();

		tmp ? setData(tmp) : setData([]);
		console.log("fffff");
	};
	const deleteData = (arr, index) => {
		arr.splice(index, 1);
		console.log(arr);
		wholeSet(arr);
		setData(dataGet());
		console.log(dataGet());
	};

	const editData = (index, arr) => {
		console.log("Edit clicked");
		props.editFunction(index, arr);
	};

	//data = useCallback( dataGet(),[data]);

	const ListComponentIn = () => {
		//	setData(dataGet());
		return (
			//// Callling map array
			
			<>
				{data.map((val, index, arr) => {
					return (
						<div className="listContainer" key={index}>
							<div className="content">
								<li>{val.todoTextBox} </li>
							</div>

							<div className="actions">
								<button
									className="edit"
									onClick={() => {
										editData(index, arr);
									}}
								>
									<FaEdit />
								</button>

								<button
									className="delete"
									onClick={() => deleteData(arr, index)}
								>
									<RiDeleteBin6Line />
								</button>
							</div>
						</div>
					);
				})}
				<button
			 	className="clear"
			 	onClick={() => {
			 		localStorage.clear();
			 		update();
			 	}}
			 >a</button>
			</>
		);
	};
	return (
		<div className="list">
			<ul>
				{<ListComponentIn />}
				<div className="listContainer">
					
				</div>
			</ul>
		</div>
	);
});
const setState = () => {
	setData(dataGet());
	console.log("Data set");
};
export { setState };
export default List;
