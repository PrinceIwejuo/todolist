import React, {useState} from "react";


const ToDoList = () => {

    let [addToList, setaddToList] = useState("")
    let [taskDid, setTaskDid] = useState(false)
    let [toDoList, settoDoList] = useState([])

    const addTask = (e) => {
        e.preventDefault();
        let newThingToDo = {addToList, taskDid}
        setaddToList("")
        settoDoList([...toDoList, newThingToDo])
    
    }

    const deleteTask = (i)=> {
        let filterToDoList = toDoList.filter((task,index )=>{
            return index != i;
        })
        
        settoDoList(filterToDoList)
    }
    
    const updateList = (i)=>{
        let copyOfToDoListt = [...toDoList]
        copyOfToDoListt[i].taskDid = !copyOfToDoListt[i].taskDid
        settoDoList(copyOfToDoListt)
    }

    return (
        <>
            <form onSubmit={addTask}>
                <div className="form-group">
                    <label htmlFor="">Add To List</label><br />
                    <input type="text" className="form-control" onChange={(e)=>{setaddToList(e.target.value)}} value={addToList}/>
                    <input type="submit" value="Add" className="btn btn-primary" />
                </div>
            </form>
            {
                toDoList.map((task,i)=>{
                    return <div key={i}>
                        <h1 style={{textDecoration:task.taskDid?"line-through": null}}>{task.addToList}</h1>
                        <button onClick={()=>deleteTask(i)} className="btn btn-danger">Did it!</button>
                        <label htmlFor="">Got it done</label>
                        <input onClick ={()=>updateList(i)}type="checkbox" name="" id="" />
                    </div>
                })
            }
        </>
    )
}

export default ToDoList