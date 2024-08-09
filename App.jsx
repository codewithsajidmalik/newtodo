import Navbar from "./components/Navbar"
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todo,  settodo] = useState("")
  const [todos,  settodos] = useState([])
  

  useEffect(()=>{
    let todoString=  localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }


  },[])

  const saveTols = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }


    const handledit= (e, id)=>{
   let todo= todos.filter(i=>i.id === id)
   settodo(todo[0].todo)
  
   let newTodos = todos.filter(item=>{
    return item.id!=id
   });
 
   settodos(newTodos)
   saveTols()


    }



    const handleDelete= (e,id)=>{

    
       let newTodos = todos.filter(item=>{
        return item.id!=id
       });
     
       settodos(newTodos)
       saveTols()
     
    }

    const handleAdd= ()=>{
      settodos([...todos, {id: uuidv4(),todo,iscompleted:false}])
      settodo("")
      saveTols()

    }
    const handlechange= (e)=>{
     
      settodo(e.target.value)

    }
    const handlecheckbox= (e)=>{
     
     let id  =  e.target.name
     console.log(id)
     let index = todos.findIndex(item=>{
      return item.id === id;
     })
     console.log(index)
     let newTodos = [...todos];
     newTodos[index].iscompleted = !newTodos[index].iscompleted
     settodo(newTodos)
     saveTols()

    }

  return (
    <>
    <Navbar/>
     <div className="md:container mx-auto my-5 rounded-xl p-5 bg-pink-100 min-h-[90vh] md:w-1/2">
     <h1 className="font-bold text-center text-xl">Task Manager</h1>
      <div className="addtodo my-5 flex flex-col">
        <h2 className="text-lg font-bold">Add ToDo</h2>
        <div className="flex"> 
        <input onChange={handlechange} value={todo} type="text" className="w-full rounded-lg px-5 py-2" />

       <button  onClick= {handleAdd} disabled = {todo.length<=3}className="bg-red-500 hover:bg-violet-500 disabled:bg-voilet-700 px-5 py-2 text-white rounded-md mx-4 font-bold  " >Save</button>


        </div>
      
        {/* // todo items section */}

      <h2 className="text-lg font-bold">Your ToDo's</h2>
      </div>
          <div className="todos">
           

           
            {todos.map(item=>{

             
           return  <div key={item.id}className="todo flex  my-3 justify-between">
            <div className="flex gap-5">
            <input name={item.id} onChange={handlecheckbox} type="checkbox"  value= {item.iscompleted} id=""/>
            <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
            </div>
          
              
              <div className="button flex h-full">
                <button onClick={(e)=>handledit(e,item.id)}className="bg-red-500 hover:bg-violet-500 p-3 py-1 text-white rounded-md mx-1 font-bold"><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}}className="bg-red-500 hover:bg-violet-500 p-3 py-1 text-white rounded-md mx-1 font-bold"><AiFillDelete /></button>
              </div>

            </div>
                })  }    
          </div>
          </div>
    </>
  )
}

export default App
