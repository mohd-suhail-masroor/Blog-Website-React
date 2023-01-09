import BlogList from '../blog-list/BlogList'
import useFetch from '../../../hooks/useFetch'

const Home = () => {
  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className='home'>
        {error && <div>{error}</div> }
        {isPending && <p>Loading!!!</p> }
        {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
    </div>
  )
}

export default Home