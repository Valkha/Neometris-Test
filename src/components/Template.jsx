import React from 'react'
import { useParams } from "react-router-dom"

function Template() {

    const params = useParams()
    console.log(params);

    return (
        <div>
            <main className='h-screen w-full'>
                <div className='w-full h-full flex justify-center items-center'>
                    <h1 className='text-9xl'>Template</h1>
                </div>
            </main>

        </div>
    )
}

export default Template
