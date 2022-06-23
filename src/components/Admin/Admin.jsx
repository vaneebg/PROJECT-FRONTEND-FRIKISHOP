import { Link } from 'react-router-dom'
import './Admin.scss'


const Admin = () => {
  return (<>
    <span>
    <span>
      <Link to="/product/id/:id">Crear un nuevo producto</Link>
          </span>
          </span>
          <Link to="/products/">Modificar un producto</Link>
          <Link to="/products/">Borrar un producto</Link>

    </>
  )
}
export default Admin