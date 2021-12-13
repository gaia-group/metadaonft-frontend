import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

function Notification({ title, message, disappear, ...props }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (disappear) {
      const timeout = setTimeout(() => setShow(false), 2000)

      return () => clearTimeout(timeout)
    }
  })

  return (
    <Transition
      appear
      show={show}
      as={Fragment}
      enter="transform ease-out duration-500 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">{props.icon}</div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-1 text-sm">{message}</p>
              </div>
              <div className="flex flex-shrink-0 ml-4">
                <button
                  className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => setShow(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

Notification.defaultProps = {
  disappear: true,
}

Notification.propTypes = {
  disappear: PropTypes.bool,
  title: PropTypes.node,
  message: PropTypes.node,
  icon: PropTypes.node,
}

export default Notification
