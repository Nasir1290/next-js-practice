"use client"

import blogs from "../../components/blog.js";


export default function SingleBlog({ params }) {
    const {id} = params;
    const blog = blogs.find((blog) => blog.id === id)
    const {title,description} = blog;
    console.log(blog)

    return (
        <div className=" bg-teal-500 rounded-lg">
            <h1 className=" text-black p-3 font-bold">
                {title}
            </h1>
            <p className=" text-white p-4">
                {description}
            </p>
        </div>
    )
}




