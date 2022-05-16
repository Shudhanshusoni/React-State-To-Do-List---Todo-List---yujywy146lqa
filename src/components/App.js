import React,{useState} from "react";
import "./../styles/App.css";

function App() {
const [lists,setLists]=useState();
const [item,setItem]=useState([]);
const [edit,setEdit]=useState();
const [update,setUpdate]=useState();
const click=(e)=>{
	e.preventDefault();
	setItem=((oldval)=>{
      return [...oldval,lists]
	})
   setLists("");
}
const edits=(id)=>{
	const edited=lists.find((ele,ind)=>{
		return(<>
		ind===id
		</>) 
	});
	setEdit(edited);
}
const updates=()=>{
	return(
		<>
		<input className="editTask" type="text" value={edit} onChange={(e)=>setUpdate(e.target.value)}/>
		<button className="saveTask" onClick={()=>setItem(update)}>Save</button>
		</>
	)
}

const del=(id)=>{
const uplists=lists.filter((ele,ind)=> id!==ind)
   setLists([...uplists]);
}

	return (
	<div id="main">
	//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.
	<input id="task" type="text" placeholder="Add Task" onChange={(e)=>setLists(e.target.value)} value={lists} />
	<Button id="btn" onClick={click}>ADD Task</Button>
    {
		item.map((cur,ind)=>{
			return(
				<ul key={ind}>
					<li className="list">{cur}</li>
					<button className="edit" onClick={()=>edits(ind)}>edit</button>
					<button className="delete" onClick={()=>del(ind)}>delete</button>
				</ul>
			)
		})
	}

	</div>
	);
}


export default App;
