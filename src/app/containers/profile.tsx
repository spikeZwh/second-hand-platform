import {  Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';

export default function Profile() {
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm cursor-pointer">
                    <Image
                        alt="usr profile"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="rounded-full"
                        width={32}
                        height={32}
                    />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <MenuItem>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                        Your Profile
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                        Settings
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                        Sign out
                    </a>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
};
