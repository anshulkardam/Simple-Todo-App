import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Todos } from './Components/Todos'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handlechange = (e) => {

    setTodo(e.target.value)
  }
  const handleAdd = () => {

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")

  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => (item.id !== id))
    setTodos(newTodos)
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)

  }
  const handleCheck = (e) => {

    let id = e.target.name;
    let index = todos.findIndex(item => (item.id === id))
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar></Navbar>
      <Todos todo={todo} todos={todos} handlechange={handlechange} handleAdd={handleAdd} handleCheck={handleCheck} handleEdit={handleEdit} handleDelete={handleDelete}></Todos>
    </>
  )
}

export default App
