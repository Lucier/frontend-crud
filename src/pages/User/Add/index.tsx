import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Content, Form, InputStyle } from './styles'

function Add() {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const user = {
    name,
    email,
    password,
  }

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault()
    axios
      .post('http://localhost:3333/api/v1/users/', user)
      .then(() => navigate('/users'))
      .catch(() => setErrorMessage('Falha ao cadastrar usuário'))
  }

  return (
    <div>
      <Content>
        <h2>CADASTRAR USUÁRIO</h2>
        <Container>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit" onClick={submitForm}>
            CADASTRAR
          </button>
        </Container>
      </Content>
      <p>{errorMessage}</p>
    </div>
  )
}

export default Add
