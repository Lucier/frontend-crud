import { useEffect, useState } from 'react'
import type IUsers from '../../../interfaces/IUsers'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container, Content, TableContainer } from './styles'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

function Home() {
  const [users, setUsers] = useState<IUsers[]>([])

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    const response = await axios.get('http://localhost:3333/api/v1/users')
    setUsers(response.data)
  }

  async function deleteUser(id: string) {
    const confirmDelete = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, Excluir',
      cancelButtonText: 'Cancelar',
    })

    if (!confirmDelete.isConfirmed) return

    await axios
      .delete(`http://localhost:3333/api/v1/users/${id}`)
      .then(() => {
        setUsers(users.filter((u) => id !== u.id))
      })
      .catch((error) => {
        console.log('Erro ao excluir usuário: ' + error)
      })
  }

  return (
    <>
      <Container>
        <Content>
          <div>
            <h2>
              <Link to={'/add-user'}>Novo usuário</Link>
              <Link to={'/search-users'}>Buscar usuários</Link>
            </h2>
          </div>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </thead>
            <tbody>
              {users.map((u: IUsers) => {
                return (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <Link to={`/edit-user/${u.id}`}>
                        <FiEdit size={30} />
                      </Link>
                      <button onClick={() => deleteUser(u.id)}>
                        <FiTrash2 size={30} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  )
}

export default Home
