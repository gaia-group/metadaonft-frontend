import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { default as ReactCountdown } from 'react-countdown'

import previewRares from '../../images/preview-boomers.gif'
import { BOOOMER_PROMO_END_DATETIME } from '../Countdown/Countdown'

function PromoModal2({ lastRecordedTime }) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <ReactCountdown
      now={() => lastRecordedTime}
      date={BOOOMER_PROMO_END_DATETIME}
      renderer={({ completed, minutes, seconds }) => {
        if (completed) return null

        return (
          <>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black"
            >
              <span className="tracking-wider text-green-300 font-mono">
                {minutes}:{String(seconds).padStart(2, '0')}
              </span>{' '}
              left in the{' '}
              <span className="text-green-300 hover:text-green-500">
                Boomer
              </span>{' '}
              raffle
              <InformationCircleIcon className="inline ml-2 text-green-300 hover:text-green-500 h-7 w-7" />
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => setIsOpen(false)}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg bg-gray-800">
                      <Dialog.Title
                        as="h3"
                        className="text-lg sm:text-2xl font-extrabold leading-6 text-gray-100"
                      >
                        Win a FREE Boomer to develop your land
                      </Dialog.Title>
                      <div className="py-3 space-y-3 flex flex-col items-center justify-center">
                        <div className="mt-2 sm:col-span-2 text-gray-300 text-sm sm:text-lg font-medium space-y-2">
                          <p>
                            Everyone who mints in the first hour of our presale
                            is entered into a raffle to win 1 of 150 free Boomer
                            mints, released in the coming weeks.
                          </p>

                          <p>
                            These tycoons develop on your metaverse land. Their
                            unique traits develop your land into something new
                            and unique.
                          </p>
                        </div>
                        <img
                          src={previewRares}
                          className="w-full block"
                          alt="Rares Preview"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-green-300 hover:bg-green-500 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => setIsOpen(false)}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </>
        )
      }}
    />
  )
}

PromoModal2.defaultProps = {}

PromoModal2.propTypes = {
  lastRecordedTime: PropTypes.object,
}

export default PromoModal2
