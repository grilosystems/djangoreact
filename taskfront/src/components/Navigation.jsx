import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Link to='/'><h1>Task App</h1></Link>
      <Link to='/task-create'>Crear tarea</Link>
    </>
  )
}

export default Navigation
