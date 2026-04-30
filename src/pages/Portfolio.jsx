import { useState, useEffect } from 'react'
import api from '../utils/axios'
import Toggle from '../components/Toggle'

function Portfolio() {
    const [projects, setProjects] = useState([])
    const [type, setType] = useState('film')
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProjects() {
        try {
            const response = await api.get('/projects/')
            setProjects(response.data)
        } catch (err) {
            setError('Failed to fetch projects')
        }
        }
        fetchProjects()
    }, [])

    const filteredProjects = projects.filter(project => project.type === type)

    return (
        <div>
        <div>
            <Toggle type={type} setType={setType} />
        </div>
        {error && <p>{error}</p>}
        <div>
            {filteredProjects.map(project => (
            <div key={project.id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            ))}
        </div>
        </div>
    )
}

export default Portfolio