import { useEffect, useState } from 'react'
import type IUsers from '../../../interfaces/IUsers'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container, Content, TableContainer } from './styles'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

function Home() {
  const [users, setUsers] = useState<IUsers[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    loadUsers()
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setFilteredUsers(filtered)
  }

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
      <Content>
        <h1>BUSCAR USUÁRIOS</h1>
        <Container>
          <input
            type="text"
            placeholder="Buscar por e-mail"
            value={searchQuery}
            onChange={handleSearch}
          />
          <TableContainer>
            <table>
              <thead>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
              </thead>
              <tbody>
                {filteredUsers.map((u: IUsers) => {
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
      </Content>
    </>
  )
}

export default Home
