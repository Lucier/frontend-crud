import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Content } from './styles'

export function Edit() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [edit, setEdit] = useState<any>({
    name: '',
    email: '',
  })

  const getData = () => {
    axios.get(`http://localhost:3333/api/v1/users/${id}`).then((response) => {
      setEdit(response.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (event: any, arg: any) => {
    setEdit({ ...edit, [arg]: event.target.value })
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
    axios
      .put(`http://localhost:3333/api/v1/users/${id}`, edit)
      .then((response) => {
        if (response.status === 200) {
          navigate('/users')
        } else {
          alert('Somthing went wrong!')
        }
      })
  }

  return (
    <div>
      <Content>
        <h2>ATUALIZAR DADOS DO USUÁRIO</h2>
        <Container onSubmit={submitHandler}>
          <input
            type="text"
            value={edit.name}
            onChange={(e) => handleChange(e, 'name')}
          />
          <input
            type="email"
            value={edit.email}
            onChange={(e) => handleChange(e, 'email')}
          />
          <button type="submit">ATUALIZAR</button>
        </Container>
      </Content>
    </div>
  )
}
