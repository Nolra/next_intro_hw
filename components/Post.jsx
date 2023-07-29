export default function Post({ post, postAutor }) {
  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-20 max-w-md md:max-w-2xl ">
      <div className="flex items-start px-4 py-6">
          <div className="">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{ postAutor.name } </h2>
            </div>
            <p className="text-gray-700">{post.title}</p>
            <p className="mt-3 text-gray-700 text-sm">{post.body}</p>
          </div>
      </div>
    </div>
  )
}
