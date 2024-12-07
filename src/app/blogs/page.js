import blogsData from "@/data/blogs.json";

export default function BlogsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      <p className="text-gray-600 mb-8">
        Explore articles and insights from industry experts.
      </p>

      <ul className="space-y-4">
        {blogsData.map((blog) => (
          <li key={blog.id} className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}