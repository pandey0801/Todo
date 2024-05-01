import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
import WellCome from "./Component/WellCome";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
      key : "s1",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
      key: "s2",
    },
    {
      name: "Like this video",
      dueDate: "right now",
      key: "s3",
    },
  ];


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate,key)=>
  {
    console.log(`${itemName} and ${itemDueDate} and ${key}` );
    const newTodo = [
      ...todoItems,
      {name:itemName, dueDate:itemDueDate, key:key}
    ]
    setTodoItems(newTodo);
  }

  const handleDel = (id)=>
  {
    const newTodo = todoItems.filter(item=> item.key!==id);
    setTodoItems(newTodo);

  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WellCome></WellCome> }
      <TodoItems todoItems={todoItems} handleDelete={handleDel}></TodoItems>
    </center>
  );
}

export default App;



