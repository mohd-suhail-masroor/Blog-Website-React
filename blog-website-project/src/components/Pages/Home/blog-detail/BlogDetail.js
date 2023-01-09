import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch';
import './BlogDetail.css'
import { useHistory } from 'react-router-dom';


function BlogDetail() {
    const { id } = useParams();
    const {data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();


    const handleDelete = ()=>{
      fetch('http://localhost:8000/blogs/'+id,{
        method: 'DELETE'
      }).then(()=>
        history.push('/')
      )
    }

  return (
    <div>
      <div className="blog-details">
        {isPending && <h2>Loading!!!</h2>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete Blog</button>
          </article>
        )}
        

      </div>
    </div>
  )
}

export default BlogDetail
