import React from 'react'
import '../styles/loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <div className='loading__blur flex'>
                <div className="container__loading flex">
                </div>
                <div>
                    <h2>Loading...</h2>
                </div>
            </div>

        </div>
    )
}

export default Loading