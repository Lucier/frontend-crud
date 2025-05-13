import React from 'react'

function Add() {
  return (
    <div>
      <h2>ATUALIZAR USUÁRIOS</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="email" placeholder="Senha" />
        <button type="submit">ATUALIZAR</button>
      </form>
      <p>ERRO</p>
    </div>
  )
}

export default Add
