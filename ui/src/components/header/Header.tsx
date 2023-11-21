import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="" style={{backgroundColor: "rgb(10,10,9,58%)"}}>
        <div>
          <div className="flex items-center justify-between h-16 mx-10">
            {/* logo */}
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex items-center">
              {/* menu */}
              <div className="hidden md:block m-auto">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:text-white hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Menu
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Offers
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About us
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                  <svg
                    width="25"
                    height="30"
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 8.75C12.5 5.99219 14.7422 3.75 17.5 3.75C20.2578 3.75 22.5 5.99219 22.5 8.75V12.5H12.5V8.75ZM8.75 12.5H3.75C1.67969 12.5 0 14.1797 0 16.25V32.5C0 36.6406 3.35938 40 7.5 40H27.5C31.6406 40 35 36.6406 35 32.5V16.25C35 14.1797 33.3203 12.5 31.25 12.5H26.25V8.75C26.25 3.91406 22.3359 0 17.5 0C12.6641 0 8.75 3.91406 8.75 8.75V12.5ZM10.625 16.25C11.1223 16.25 11.5992 16.4475 11.9508 16.7992C12.3025 17.1508 12.5 17.6277 12.5 18.125C12.5 18.6223 12.3025 19.0992 11.9508 19.4508C11.5992 19.8025 11.1223 20 10.625 20C10.1277 20 9.65081 19.8025 9.29917 19.4508C8.94754 19.0992 8.75 18.6223 8.75 18.125C8.75 17.6277 8.94754 17.1508 9.29917 16.7992C9.65081 16.4475 10.1277 16.25 10.625 16.25ZM22.5 18.125C22.5 17.6277 22.6975 17.1508 23.0492 16.7992C23.4008 16.4475 23.8777 16.25 24.375 16.25C24.8723 16.25 25.3492 16.4475 25.7008 16.7992C26.0525 17.1508 26.25 17.6277 26.25 18.125C26.25 18.6223 26.0525 19.0992 25.7008 19.4508C25.3492 19.8025 24.8723 20 24.375 20C23.8777 20 23.4008 19.8025 23.0492 19.4508C22.6975 19.0992 22.5 18.6223 22.5 18.125Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/1064036?v=4"
                        alt=""
                      />
                    </button>
                  </div>
                  {showMenu && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      style={{ zIndex: 1000 , backgroundColor: "#242424"}}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <div className="block mx-auto py-2 text-sm text-gray-700">
                        <h6 className="text-center text-orange-400 font-medium text-base">John Wick</h6>
                        <p className="text-center text-orange-400 font-thin text-xs">id: #123456</p>
                      </div>
                      <div className="bg-orange-400 h-px" ></div>
                      <div>
                        <a
                          href="#"
                          className="block text-center py-2 text-white text-sm text-xs hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>

                        <a
                          href="#"
                          className="block text-center py-2 text-sm text-white text-xs hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>

                        <a
                          href="#"
                          className="block text-center py-2 text-sm text-white text-xs hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
