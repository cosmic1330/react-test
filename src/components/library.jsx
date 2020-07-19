import React from 'react'

function Library() {
    const [count, setCount] = React.useState(0)
    return (
        <div className="library">
            <span data-testid="span">{count}</span>
            <div>
                <button onClick={()=>setCount(count+1)}>點我</button>
            </div>
        </div>
    )
}

export default Library
