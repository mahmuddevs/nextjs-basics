import Link from "next/link"

const PostCard = ({ title, body, id }) => {
    return (
        <div className="mx-auto bg-white shadow-md rounded-lg border border-gray-200 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">
                {body.length > 100 ? body.substring(0, 100) + '...' : body}
            </p>
            <Link href={`/blogs/${id}`}

                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-auto self-start"
            >
                View More
            </Link>
        </div>
    )
}

export default PostCard