import { ReactDOM, useState } from "react";

/* This is a simple component that can be added to the right of the screen. If you want a simple example, you can use this and
 skip the code regarding <Navbar /> */
const SquareBlue = (
  <div className="w-full h-10 rounded-lg bg-blue-200 shadow-lg mt-4"></div>
);

// Icons, and Headless UI functions.
import { TrashIcon } from "@heroicons/react/solid";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

// An array for the Navigation, long term I plan to switch this out with a state solution to allow for greater customization.
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/*
* This is the main component that will be rendered on the screen. It is a Navbar from TailwindUI.
* Feel free to hide this code in most major IDEs. It is just a simple example.
*/
const Navbar = (
  <Disclosure as="nav" className="w-full">
    {({ open }) => (
      <>
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-black font-bold text-2xl">Workflow</h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className=" p-1 rounded-full text-gray-900 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

const Home = () => {
  // A state of components on the right side of the page.
  const [state, setState] = useState({
    components: Array(0).fill(null),
  });

  // Add the navbar to the state.
  const addNavbar = () => {
    setState({
      components: state.components.concat(Navbar),
    });
  };

  // Add the blue square to the state.
  const addSquareBlue = () => {
    setState({
      components: state.components.concat(SquareBlue),
    });
  };

  return (
    <div>
      <p className="absolute md:hidden">
        {/* Hides the site on mobile */}
        This app is currently only available for desktop
      </p>
      <div className="hidden md:flex flex-col md:justify-between md:flex-row mb-4">
        <div className="md:w-[30%] h-screen mb-6">
          <div className="h-full rounded-r-xl shadow-md">
            <div className="p-4 flex flex-col">
              <h1 className="text-2xl font-bold">Drag and Drop Components</h1>
              <p className="text-gray-700">
                Drag and drop components from the left to the right.
              </p>
              <button
                className="w-full h-10 rounded-lg bg-gray-200 shadow-lg mt-4"
                onClick={() => {
                  addNavbar();
                }}
              >
                Navbar 1
              </button>
              <button
                className="w-full h-10 rounded-lg bg-blue-200 shadow-lg mt-4"
                onClick={() => {
                  addSquareBlue();
                }}
              ></button>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] px-10">
          <div
            className="h-full rounded-l-xl shadow-md p-6 flex flex-col"
            id="right"
          >
            {/* Render all of the components */}
            {state.components.map((square, index) => {
              return (  
                <div key={index} className="flex flex-row items-center">
                  <button
                    className="w-6 h-6 rounded-lg mr-6"
                    onClick={() => {
                      setState({
                        components: state.components.filter((_, i) => i !== index),
                      });
                    }}
                  >
                    <TrashIcon className="w-10 h-10 fill-red-400" />
                  </button>
                  {square}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
