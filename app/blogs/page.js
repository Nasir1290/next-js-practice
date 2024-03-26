import React from 'react'
import blogs from '../components/blog'
import SingleBlog from './[id]/page'
import Link from 'next/link'
import BlogItem from '../components/BlogItem'

export default function BlogPage() {

    return (
        <div >
            Blog List
            {blogs.map((blog) => (
                <BlogItem key={blog.id} title={blog.titile}/> 
            ))}
        </div>
    )
}
