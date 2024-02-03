import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Assesment-Form', href: '/assesmentform' },
  { name: 'Patient Details', href: '/patientdetails' }
]

export default function Navigation() {
  return (
    <>
      <div className="px-2 sm:px-6 lg:px-8 bg-gray-800">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="src/assets/DextraRehab.png" alt="Your Company" />
            </div>
            <div className="flex space-x-4 ml-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-950"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
