import Image from "next/image";

export default function Photo({ photo }) {
  return (
    <figure class="max-w-xs">
      <Image className="mt-4 h-auto max-w-xs rounded-lg" src={photo.url} role="presentation" width={600} height={600}/>
      <figcaption class="mt-2 max-w-xs text-sm text-center text-gray-500 dark:text-gray-400">Photo - {photo.title}</figcaption>
    </figure>
  )
}
