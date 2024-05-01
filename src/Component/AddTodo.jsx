import { useState } from "react";

function AddTodo({onNewItem}) {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleName = (event)=>
    {
        // console.log(event.target.value)
        setName(event.target.value);
    }


    const handleDate = (event)=>
    {
        // console.log(event.target.value)
        setDate(event.target.value);
    }

    
    // console.log(name);
    // console.log(date);

    const handleButton = ()=>
    {
        const key = Math.random().toString();
        onNewItem(name,date,key)
        setName("");
        setDate("");   
    }
    

    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" 
            placeholder="Enter Todo Here"
            value={name}
            onChange={handleName}
            />
          </div>
          <div className="col-4">
            <input type="date" 
             value={date}
             onChange={handleDate}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            // onClick={()=>onNewItem(name,date)}
            onClick={handleButton}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;