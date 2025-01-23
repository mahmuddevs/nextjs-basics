import PostCard from "@/components/PostCard";
import getAllData from "@/libs/getAllData";

export default async function Home() {
  const data = await getAllData()
  return (
    <div className="container mx-auto my-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          data?.map((blog) => {
            return <PostCard key={blog.id} {...blog} />
          })
        }
      </div>
    </div>
  );
}
