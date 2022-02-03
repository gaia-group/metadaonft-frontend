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
      <div className="xl:mx-auto">
        <div className="flow-root">
          <div className="-my-2">
            <div className="box-content relative py-2 overflow-x-auto h-80">
              <div className="absolute flex px-2 space-x-4 min-w-screen-xl sm:px-4 lg:px-6">
                {categories.map((category) => (
                  <div
                    key={category.imgSrc}
                    className="relative group flex flex-col w-80 overflow-hidden rounded-lg h-80"
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
                      className="absolute inset-x-0 bottom-0 transition-opacity duration-200 opacity-0 group-hover:opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
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
