import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/portfolio" element={<h1>Portfolio</h1>} />
      <Route path="/projects/:slug" element={<h1>Project Detail</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/admin/projects/create" element={<h1>Create Project</h1>} />
      <Route path="/admin/projects/:slug/edit" element={<h1>Edit Project</h1>} />
      <Route path="/admin/account" element={<h1>Account</h1>} />
    </Routes>
  )
}

export default App