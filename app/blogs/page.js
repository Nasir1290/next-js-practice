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
                <Link key={blog.id} href={`/blogs/${blog.id}`}>
                    <BlogItem title={blog.title} />
                </Link>
            ))}
        </div>
    )
}
