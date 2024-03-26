import blogs from "@/app/components/blog";

export default function SingleBlog({ params }) {

    const { id } = params;
    const blog = blogs.find((blog) => blog.id === id);
    return (
        <div>

        </div>
    )
}
