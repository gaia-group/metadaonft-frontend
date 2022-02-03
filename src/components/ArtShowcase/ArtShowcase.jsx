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
const pieces = [
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
    <div className="bg-black py-2">
      <div className="xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="flow-root">
          <div className="-my-2">
            <div className="box-content relative py-2 overflow-x-auto h-80 xl:overflow-visible">
              <div className="absolute flex px-2 space-x-8 min-w-screen-xl sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {pieces.map((piece) => (
                  <div
                    key={piece.imgSrc}
                    className="relative flex flex-col w-80 p-6 overflow-hidden rounded-lg h-80 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={piece.imageSrc}
                        className="object-cover object-center w-full h-full"
                      />
                    </span>
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
