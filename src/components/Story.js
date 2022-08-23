import React from 'react'

const Story = ({story}) =>{
    return (
        <div>
            <ul>
                <li>{story.title}</li>
            </ul>
        </div>
    )
}

export default Story