import React from 'react'
import PropTypes from 'prop-types'
import preview from '../../images/preview-0.jpeg'

function ArtistSpotlight() {
  return (
    <div className="py-16 bg-black overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative space-y-4">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Meet <span className="text-green-300">8thproject</span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-xl text-gray-300">
            The artist behind your new land NFT
          </p>
          <p className="text-center flex items-center justify-center">
            <a
              href="https://twitter.com/8thproject1"
              className="text-green-300 hover:text-green-500"
            >
              @8thproject.eth{' '}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-4 w-4 inline"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-100 tracking-tight sm:text-3xl">
              Going against the current
            </h3>
            <p className="mt-3 text-lg text-gray-300">
              Free of any artistic education, he doesn&apos;t draw what art
              schools teach. Raw imagination and artistic impulse are his
              drivers.
            </p>
            <p className="mt-3 text-lg text-gray-300">
              He started the Art of Drawing for the first time in March 2020,
              thanks to the COVID19 pandemic, dedicating time to this new
              passion.
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Starting with scribbled destructured animals, his style evolved
              over time and was inspired by the artist Wassily Kandinsky while
              keeping a geometrical style.
            </p>
            <p className="mt-3 text-lg text-gray-300">
              8thproject has launched several successful NFT projects including{' '}
              <a
                href="https://opensea.io/collection/8thproject"
                className="text-green-300 hover:text-green-400"
                rel="noreferrer"
                target="_blank"
              >
                8thproject
              </a>
              ,{' '}
              <a
                href="https://opensea.io/collection/8thproject1"
                className="text-green-300 hover:text-green-400"
                rel="noreferrer"
                target="_blank"
              >
                8th Project 1/1s
              </a>
              ,{' '}
              <a
                href="https://opensea.io/collection/8thwonders"
                className="text-green-300 hover:text-green-400"
                rel="noreferrer"
                target="_blank"
              >
                8thwonders
              </a>{' '}
              and{' '}
              <a
                href="https://opensea.io/collection/8th-project-genesis"
                className="text-green-300 hover:text-green-400"
                rel="noreferrer"
                target="_blank"
              >
                8th project Genesis
              </a>
              .
            </p>
            <p className="mt-3 text-lg text-gray-300">
              8thproject&apos;s unique style partnered with Meta DAOs vision
              birthed the stunning and rare art in this newest collection.
            </p>
          </div>

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
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
      </div>
    </div>
  )
}

ArtistSpotlight.defaultProps = {}

ArtistSpotlight.propTypes = {
  className: PropTypes.string,
}

export default ArtistSpotlight
