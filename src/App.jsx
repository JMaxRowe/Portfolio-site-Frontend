import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Login from './pages/Login'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'
import Account from './pages/Account'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/projects/:slug" element={<ProjectDetail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin/projects/create" element={<CreateProject/>} />
      <Route path="/admin/projects/:slug/edit" element={<EditProject/>} />
      <Route path="/admin/account" element={<Account/>} />
    </Routes>
  )
}

export default App