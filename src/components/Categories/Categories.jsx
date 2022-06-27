import React from 'react'
import { useContext, useEffect } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext/CategoriesState'

const Categories = () => {

  const {categories,getAllCateg } = useContext(CategoriesContext)
 

  useEffect(() => {
    getAllCateg();
  }, []);

console.log("aquii",categories)
  return (
    <div className="categories" >
    holi
    </div>
  )
}
export default Categories