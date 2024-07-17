
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const Todos = ({ todo, todos, handlechange, handleAdd, handleEdit, handleCheck, handleDelete }) => {

    return (
        <div className='container mx-auto p-5 '>
            <div className='bg-teal-400 min-h-[85vh] rounded-md'>
                <div className="flex justify-center text-2xl font-semibold">Your To-Do List</div>
                <div className="m-5">
                    <div className="font-semibold">Add a Todo!</div>
                    <input onChange={handlechange} value={todo} type="text" placeholder="What you wanna do! " className="rounded-sm w-3/4"></input>
                    <button onClick={handleAdd} disabled={todo.length<=1} className="bg-blue-600 hover:bg-blue-900 disabled:bg-blue-200 mx-5 p-2 py-1 text-sm font-semibold text-white rounded-lg">Add</button>
                    <div className="font-semibold py-2">Your Todos</div>
                   
                    {todos.length===0 && <div className='m-4'>No Todos to Display </div>}
                    {todos.map(item=>(

                    
                    <div key={item.id} className="flex justify-between w-1/3 my-3">
                        <div className='flex gap-6'>
                        <input type="checkbox" onChange={handleCheck} name={item.id} checked={item.isCompleted} />
                        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                        </div>
                        <div className='buttons'>
                        <button onClick={(e)=>{handleEdit(e,item.id)}} className="bg-blue-600  hover:bg-blue-900 mx-3 p-2 py-1 text-sm font-semibold text-white rounded-lg"><FaRegEdit /></button>
                        <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-blue-600 hover:bg-blue-900 p-2 py-1 text-sm font-semibold text-white rounded-lg"><MdDeleteOutline /></button>
                        </div>
                    
                    </div>
                    ))}
                  
                    
                </div>
                   
               
            </div>

        </div>
    )
}