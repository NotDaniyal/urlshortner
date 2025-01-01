"use client"
import { sendStatusCode } from 'next/dist/server/api-utils'
import React, {useState} from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

  return (
    <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input value={url} className='px-4 py-2 focus:outline-blue-500 rounded-md' type="text" placeholder='Enter Your URL' onChange={e =>{seturl(e.target.value)}} />

            <input value={shorturl} type="text" className='px-4 py-2 focus:outline-blue-500 rounded-md' placeholder='Enter your preferred short URL text' onChange={e =>{setshorturl(e.target.value)}} />
            <button className='bg-red-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3'>Generate</button>
        </div>
        </div>
  )
}

export default Shorten