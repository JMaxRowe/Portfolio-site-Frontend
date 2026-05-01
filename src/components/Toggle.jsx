function Toggle({ type, setType }) {
    return (
        <div style={{
        display: 'inline-flex',
        background: '#1a1a1a',
        borderRadius: '999px',
        padding: '4px',
        position: 'relative',
        border: '1px solid #333',
        }}>
        <div style={{
            position: 'absolute',
            top: '4px',
            left: type === 'film' ? '4px' : 'calc(50%)',
            width: 'calc(50% - 4px)',
            height: 'calc(100% - 8px)',
            background: '#ffffff',
            borderRadius: '999px',
            transition: 'left 0.3s ease',
            zIndex: 0,
        }}/>
        <button onClick={() => setType('film')} style={{
            position: 'relative',
            background: 'none',
            border: 'none',
            padding: '8px 32px',
            borderRadius: '999px',
            cursor: 'pointer',
            color: type === 'film' ? '#000000' : '#ffffff',
            transition: 'color 0.3s ease',
            zIndex: 1,
            fontsize: '14px',
        }}>Film</button>
        <button onClick={() => setType('software')} style={{
            position: 'relative',
            background: 'none',
            border: 'none',
            padding: '8px 32px',
            borderRadius: '999px',
            cursor: 'pointer',
            color: type === 'software' ? '#000000' : '#ffffff',
            transition: 'color 0.3s ease',
            zIndex: 1,
            fontSize: '14px',
        }}>Software</button>
        </div>
    )
}

export default Toggle