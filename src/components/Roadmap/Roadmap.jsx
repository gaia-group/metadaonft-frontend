import React from 'react'

import preview from '../../images/preview-11.png'

function Roadmap() {
  return (
    <div className="py-16 bg-gray-900 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src={preview}
              alt="Art Preview"
            />
          </div>

          <div className="flex flex-col items-center justify-center mx-auto bg-gray-900 md:flex-row">
            <div className="order-last w-full max-w-3xl px-4 border-gray-700 md:order-first sm:px-6 lg:px-8 z-10">
              <h2 className="py-8 mt-2 text-3xl font-extrabold tracking-tight text-left text-gray-200 sm:text-4xl">
                The Roadmap
              </h2>
              <p className="text-lg text-left text-gray-200 sm:text-2xl">
                <span className="font-extrabold text-green-300">First</span>
                {', '}
                sell 4,444 NFT collectibles.
              </p>
              <p className="text-lg text-left text-gray-200 sm:text-2xl">
                <span className="font-extrabold text-green-300">Next</span>
                {', '}
                bring your collectible to life.
              </p>
              <div className="space-y-2 sm:space-y-4 pt-6 sm:pt-10">
                <p className="text-gray-200 sm:text-lg text-base">
                  Giving people tools to own and access digital goods and
                  property is crucial in this next phase of the internet.
                </p>

                <p className="text-gray-200 sm:text-lg text-base">
                  Our first product is a collectible artwork that you can
                  treasure on the blockchain forever. This collectible may be
                  the first piece of digital property that you truly own.
                </p>

                <p className="text-gray-200 sm:text-lg text-base">
                  This collectible represents a unique plot of land in an
                  impossible universe. A universe waiting to be created and
                  explored.
                </p>

                <p className="text-gray-200 sm:text-lg text-base">
                  It also gives you access to future product launches – products
                  that will enable you to build your own unique experiences
                  easily, and that bridge the gap between your physical and
                  digital spaces.{' '}
                </p>

                <p className="text-gray-200 sm:text-lg text-base">
                  Our next product will work with our first collectible to
                  achieve this mission, and will be unveiled in Q2 of 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
