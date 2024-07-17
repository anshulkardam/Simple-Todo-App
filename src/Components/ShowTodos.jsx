export const ShowTodos = ({todos})=>{

    const show = todos.map(item=> item.todo)

    return (
        <div>{show}</div>
    )
}