import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'

function SuccessfulMintModal({ open, onClose }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
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
                Congratulations! You&apos;re in.
              </Dialog.Title>
              <div className="py-3 space-y-3 flex flex-col items-center justify-center">
                <div className="mt-2 sm:col-span-2 text-gray-300 text-sm sm:text-lg font-medium space-y-2">
                  <p>
                    Go to the #collabland-join channel on Discord to verify
                    ownership and get access to members-only benefits like the
                    MetaDAO launchpad.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <a
                  href="https://discord.gg/bKtJ2nC2Rk"
                  className="inline-flex justify-center px-6 py-3 font-medium text-gray-800 bg-green-300 hover:bg-green-500 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onClose}
                >
                  Let&apos;s do it!
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

SuccessfulMintModal.defaultProps = {
  open: false,
}

SuccessfulMintModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default SuccessfulMintModal
