import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios'

function CreateProject() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        type: 'film',
        image_url: '',
        video_url: '',
        github_url: '',
        live_url: '',
        roles: [],
        tags: [],
    })
    const [roleInput, setRoleInput] = useState('')
    const [tagInput, setTagInput] = useState('')
    const [error, setError] = useState(null)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleAddRole(e) {
        if (e.key === 'Enter' && roleInput.trim()) {
        e.preventDefault()
        setFormData({ ...formData, roles: [...formData.roles, { name: roleInput.trim() }] })
        setRoleInput('')
        }
    }

    function handleAddTag(e) {
        if (e.key === 'Enter' && tagInput.trim()) {
        e.preventDefault()
        setFormData({ ...formData, tags: [...formData.tags, { name: tagInput.trim() }] })
        setTagInput('')
        }
    }

    function removeRole(index) {
        setFormData({ ...formData, roles: formData.roles.filter((_, i) => i !== index) })
    }

    function removeTag(index) {
        setFormData({ ...formData, tags: formData.tags.filter((_, i) => i !== index) })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
        await api.post('/projects/', formData)
        navigate('/portfolio')
        } catch (err) {
        setError('Failed to create project')
        console.log(err)
        }
    }

    return (
        <div>
        <h1>Create Project</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>

            <div>
            <label>Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
                <option value="film">Film</option>
                <option value="software">Software</option>
            </select>
            </div>

            <div>
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </div>

            <div>
            <label>Slug</label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} />
            </div>

            <div>
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
            </div>

            <div>
            <label>Image URL</label>
            <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
            </div>

            {formData.type === 'film' && (
            <>
                <div>
                <label>Video URL</label>
                <input type="text" name="video_url" value={formData.video_url} onChange={handleChange} />
                </div>
                <div>
                <label>Roles (press Enter to add)</label>
                <input
                    type="text"
                    value={roleInput}
                    onChange={e => setRoleInput(e.target.value)}
                    onKeyDown={handleAddRole}
                />
                <div>
                    {formData.roles.map((role, index) => (
                    <span key={index}>
                        {role.name} <button type="button" onClick={() => removeRole(index)}>x</button>
                    </span>
                    ))}
                </div>
                </div>
            </>
            )}

            {formData.type === 'software' && (
            <>
                <div>
                <label>GitHub URL</label>
                <input type="text" name="github_url" value={formData.github_url} onChange={handleChange} />
                </div>
                <div>
                <label>Live URL</label>
                <input type="text" name="live_url" value={formData.live_url} onChange={handleChange} />
                </div>
                <div>
                <label>Tags (press Enter to add)</label>
                <input
                    type="text"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                />
                <div>
                    {formData.tags.map((tag, index) => (
                    <span key={index}>
                        {tag.name} <button type="button" onClick={() => removeTag(index)}>x</button>
                    </span>
                    ))}
                </div>
                </div>
            </>
            )}

            <button type="submit">Create Project</button>
        </form>
        </div>
    )
}

export default CreateProject