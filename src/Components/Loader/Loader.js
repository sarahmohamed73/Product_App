import React from 'react'

export default function Loader() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
