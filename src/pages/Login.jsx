import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios'
import { setToken } from '../utils/Auth'


function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
        const response = await api.post('/auth/login/', formData)
        setToken(response.data.access)
        navigate('/admin/projects/create')
        } catch (error) {
        setError('Invalid username or password')
        }
    }

    return (
        <div>
        <h1>Login</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login