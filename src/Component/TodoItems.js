
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

import { useEffect } from "react";

const TodoItems = ({ todoItems , handleDelete }) => {

    console.log(todoItems);

  return (
    
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem 
        todoDate={item.dueDate} 
        todoName={item.name}
        Key={item.key}
        // todoid={item.key}
        handleDelete={handleDelete}
        >
        </TodoItem>

      ))}
    </div>
  );
};

export default TodoItems;






// import React from 'react'

// export default function TodoItems() {

//     console.log("dklk");
//   return (
//     <>
//     </>
//     // <div>{<p>todoItems</p>}</div>
//   )
// }
