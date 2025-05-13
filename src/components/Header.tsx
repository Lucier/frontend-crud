// import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="div-header">
      <Link to={'/'}>HOME</Link>
      <Link to={'/add-user'}>CADASTRAR USUÁRIO</Link>
      <Link to={'/users'}>USUÁRIOS CADASTRADOS</Link>
    </div>
  )
}

export default Navbar
