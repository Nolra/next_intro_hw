export default function Post({ post, postAutor }) {
  return (
    <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-20 max-w-md md:max-w-2xl ">
      <div class="flex items-start px-4 py-6">
          <div class="">
            <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">{ postAutor.name } </h2>
            </div>
            <p class="text-gray-700">{post.title}</p>
            <p class="mt-3 text-gray-700 text-sm">{post.body}</p>
          </div>
      </div>
    </div>
  )
}
