import React from 'react'
import './Create.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title,body,author}

    setIsPending(true)

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: { "content-type":"application/json"},
      body: JSON.stringify(blog)
    })
    .then(
      setIsPending(false),
      history.push('/')
    )

  }

  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>

          <label>Blog title:</label>
          <input type="text" required onChange={(e) =>setTitle(e.target.value)}/>

          <label>Blog title:</label>
          <textarea type="text" required onChange={(e) => setBody(e.target.value)}/>

          <label>Blog title:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Mario">Mario</option>
            <option value="Luigi">Luigi</option>
          </select>

          {!isPending && <button >Add Blog</button>}
          {isPending && <button disabled >Adding Blog</button>}
        </form>

    </div>
  )
}

export default Create
