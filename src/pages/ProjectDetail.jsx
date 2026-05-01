import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import api from '../utils/axios'

function ProjectDetail() {
    const { slug } = useParams()
    const [project, setProject] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchProject() {
        try {
            const response = await api.get(`/projects/${slug}/`)
            console.log (response)
            console.log(response.data.video_url)
            setProject(response.data)
        } catch (err) {
            setError('Project not found')
        }
        }
        fetchProject()
    }, [slug])

    if (error) return <p>{error}</p>
    if (!project) return <p>Loading...</p>

    

    return (
        <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.video_url && (
        <ReactPlayer src={project.video_url}/>
        )}

        {project.live_url && (
        <iframe
            src={project.live_url}
            width="100%"
            height="600px"
            title={project.title}
        />
        )}
        {project.roles.length > 0 && (
            <div>
            <h3>Roles</h3>
            {project.roles.map(role => (
                <span key={role.id}>{role.name}</span>
            ))}
            </div>
        )}
        {project.tags.length > 0 && (
            <div>
            <h3>Tags</h3>
            {project.tags.map(tag => (
                <span key={tag.id}>{tag.name}</span>
            ))}
            </div>
        )}
        </div>
    )
}

export default ProjectDetail