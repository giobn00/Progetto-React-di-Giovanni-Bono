import { Outlet, useMatches, Link, useLocation } from "react-router-dom";




export default function App() {

  return (
    <>
    {/* Sezione della navbar */}
      <div className="w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 justify-between">
                <Link to="/" className="flex flex-1 items-stretch justify-start">
                    <span className="flex flex-shrink-0 items-center">
                      <div className="text-4xl">🍁</div>
                    </span>
                    <span className="flex pl-2 text-2xl flex-shrink-0 items-center font-semibold tracking-wide	text-zinc-600">GustoVeg</span>
                </Link>
                  <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                      <a className="text-gray-700 hover:text-indigo-700 text-sm font-medium" >Login</a>
                      <a className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                          href="#">Sign up
                      </a>
                  </div>
            </div>
        </div>
    </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 min-h-screen">
        <Outlet />
      </div>
      <footer className="bg-gray-800 text-white py-4 px-3 mt-16">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                  <p className="text-xs text-gray-400 md:text-sm">Copyright 2020 &copy; All Rights Reserved</p>
              </div>
              <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                  <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                      <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                      <li className="mx-4"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                  </ul>
              </div>
          </div>
      </footer>
    </>
  )
}