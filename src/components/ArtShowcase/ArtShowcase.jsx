import React from 'react'

import preview1 from '../../images/preview-1.png'
import preview2 from '../../images/preview-2.png'
import preview3 from '../../images/preview-3.png'
import preview4 from '../../images/preview-4.png'
import preview5 from '../../images/preview-5.png'
import preview6 from '../../images/preview-6.png'
import preview7 from '../../images/preview-7.png'
import preview8 from '../../images/preview-8.png'
import preview9 from '../../images/preview-9.png'
import preview10 from '../../images/preview-10.png'

let count = 0
const categories = [
  {
    id: count++,
    imageSrc: preview1,
  },
  {
    id: count++,
    imageSrc: preview2,
  },
  {
    id: count++,
    imageSrc: preview3,
  },
  {
    id: count++,
    imageSrc: preview4,
  },
  {
    id: count++,
    imageSrc: preview5,
  },
  {
    id: count++,
    imageSrc: preview6,
  },
  {
    id: count++,
    imageSrc: preview7,
  },
  {
    id: count++,
    imageSrc: preview8,
  },
  {
    id: count++,
    imageSrc: preview9,
  },
  {
    id: count++,
    imageSrc: preview10,
  },
]

function ArtShowcase() {
  return (
    <div className="bg-black py-6">
      <div className="xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="flow-root">
          <div className="-my-2">
            <div className="box-content relative `p`y-2 overflow-x-auto h-80 xl:overflow-visible">
              <div className="absolute flex px-4 space-x-8 min-w-screen-xl sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {categories.map((category) => (
                  <div
                    key={category.imgSrc}
                    className="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={category.imageSrc}
                        alt=""
                        className="object-cover object-center w-full h-full"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtShowcase
