import React from 'react'

const Task = ({title, description}) => {
    return (
        <div class="p-6 max-w-sm bg-gray-800 rounded-xl shadow-lg flex items-center space-x-4">
            <div>
                <div class="text-xl font-medium text-white">{title}</div>
                <p class="text-slate-500">{description}</p>
            </div>
        </div>
    )
}

export default Task