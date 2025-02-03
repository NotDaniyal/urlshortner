"use client"
import { sendStatusCode } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React, {useState} from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

    const generate = () => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    consolo.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
    }
  return (
    <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input value={url} className='px-4 py-2 focus:outline-blue-500 rounded-md' type="text" placeholder='Enter Your URL' onChange={e =>{seturl(e.target.value)}} />

            <input value={shorturl} type="text" className='px-4 py-2 focus:outline-blue-500 rounded-md' placeholder='Enter your preferred short URL text' onChange={e =>{setshorturl(e.target.value)}} />
            <button onClick={generate} className='bg-red-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3'>Generate</button>
        </div>
        {generated && <>
          <span className='font-bold text-lg'>Your Link: </span><code><Link target="_blank" href={generated}>{generated}</Link>
          </code> </>}
        </div>
  )
}

export default Shorten
