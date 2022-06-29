import { Link } from 'react-router-dom'
import './Admin.scss'


const Admin = () => {
  return (<>
    <div className="center">
      <div className="containerAd">
        <h2>Tareas administrativas</h2>
        <Link to="/product/id/:id">Crear un nuevo producto</Link>
        <Link to="/products/">Modificar un producto</Link>
        <Link to="/products/">Borrar un producto</Link>
      </div>
    </div>
  </>
  )
}
export default Admin