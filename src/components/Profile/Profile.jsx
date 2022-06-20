import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {

    const { getUserInfo,user } = useContext(UserContext)

    useEffect(()=>{
        getUserInfo()
    },[])

    console.log(user)

    if(!user){
        return <span>Cargando...</span>
    }

  return (
    <div>
        <h1>Profile</h1>  
        <span>Tu nombre: {user.username}</span> <br />
        <span>Tu email: {user.email}</span><br />
        <span>Tu cueva: {user.adress}</span>
        </div>
  )
}

export default Profile