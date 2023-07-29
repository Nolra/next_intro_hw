import Photo from "./Photo"

export default function AlbumPhotos({ album, user, photos }) {
  return (
    <>
      <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-20 max-w-md md:max-w-2xl ">
        <div className="flex items-start px-4 py-6">
            <div className="">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                    User - { user.name }, Album № {album}
                  </h2>
              </div>
              <p className="text-gray-700 underline"></p>
            </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        {
          photos.map(photo => (
            <Photo key={photo.id} photo={photo}/>
          ))
        }
      </div>
    </>
  )
}
