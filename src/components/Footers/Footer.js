import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-800 pt-8 pb-6">
          <div className="flex flex-col items-center md:justify-between justify-center">

            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
                <div className="-mt-3 mb-3">
                  <a href="https://twitter.com/Jsebas_Loaiza">
                    <button
                      className="mx-5 bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                  </a>
                  
                  <a href="https://instagram.com/jscalle.growth">
                    <button
                      className="mx-5 bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </button>
                  </a>
                 
                  <a href="https://github.com/jscalle">
                    <button
                      className="mx-5 bg-gray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

          <hr className="border-blueGray-300" />

            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Misión NFT LATAM
                {/* <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >  
                  Creative Tim                
                </a>
                . */}
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}
