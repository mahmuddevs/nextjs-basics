import getSingleData from "@/libs/getSingleData"
import Link from "next/link"

const Details = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    console.log(data)

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg border border-gray-300 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{data.title}</h1>
                <p className="text-lg text-gray-600 mb-8">{data.body}</p>
                <Link href='/'
                    className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default Details