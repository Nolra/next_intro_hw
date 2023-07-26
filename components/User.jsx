export default function User({ user }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      <li className="flex justify-between gap-x-6 py-5">
        <div className="flex gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.company.name}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="mt-1 text-xs leading-5 text-gray-500">{user.email}</p>
          <p className="text-sm leading-6 text-gray-900">{user.website}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">{user.phone}</p>
        </div>
      </li>
    </ul>
  )
}