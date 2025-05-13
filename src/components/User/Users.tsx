import { useEffect, useState } from 'react'
import type IUsers from '../../interfaces/IUsers'

function Home() {
  const [users, setUsers] = useState<[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:3333/api/v1/users')

      const data = await response.json()

      setUsers(data)
    })()
  }, [])

  return (
    <>
      <div>
        <h1>USUÁRIOS CADASTRADOS</h1>

        <table>
          <thead>
            <th>Nome</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((u: IUsers) => {
              return (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
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
