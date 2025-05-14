import { useEffect, useState } from 'react'
import type IUsers from '../../interfaces/IUsers'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [users, setUsers] = useState<IUsers[]>([])

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    const response = await axios.get('http://localhost:3333/api/v1/users')
    setUsers(response.data)
  }

  return (
    <>
      <div>
        <h1>USUÁRIOS CADASTRADOS</h1>

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
                    <Link to={`/edit-user/${u.id}`}>EDITAR</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
