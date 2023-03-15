import { Menu } from '@headlessui/react'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'


export default function MyDropdown() {
  return (
    <Menu >
      <Menu.Button>< ChevronDoubleDownIcon className="text-[#293CE1] w-3"/></Menu.Button>
      <Menu.Items className={'flex flex-col space-x-2 bg-white justify-left items-start'}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`mt-2 px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Business
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Pricing
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Personal
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Product
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          {({ active }) => (
            <a
              className={`px-2 text-blue-600 font-bold hover:border-2 hover:border-blue-800 cursor-pointer ${active && ' border-blue-800'}`}
              href="/"
            >
              Company
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}