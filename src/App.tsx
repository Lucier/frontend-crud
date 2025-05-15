import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Add from './components/User/Add'
import Search from './components/User/Search'
import { Edit } from './components/User/Edit'
import Header from './components/Header'

import './global.css'
import Users from './components/User/Users'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<Add />} />
        <Route path="/edit-user/:id" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/search-users" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
