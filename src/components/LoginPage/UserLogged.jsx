import React from 'react'



const userLogged = ({ user, setUser }) => {

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }
    
  return (
    <article>
        <header>
            <img 
            src={
                user.gender==='female'
                ?'/female.jpeg'
                :'/male.jpeg'

            } alt="" 
            />
        </header>
        <h2>
            {user.firstName} {user.lastName}
        </h2>
        <button onClick={handleLogout}>logund</button>

      
    </article>
  )
}

export default userLogged
