import Link from "next/link";

export default function Album({ album, albumAutor }) {
  const linkTophotos = "/users/" + albumAutor.id + "/albums/" + album.id;

  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-20 max-w-md md:max-w-2xl ">
      <div className="flex items-start px-4 py-6">
          <div className="">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{ albumAutor.name } </h2>
            </div>
            <p className="text-gray-700 underline"><Link href={linkTophotos}>{album.title}</Link></p>
          </div>
      </div>
    </div>
  )
}
