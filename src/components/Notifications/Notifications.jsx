import React from 'react'
import PropTypes from 'prop-types'

import Notification from '../Notification/Notification'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

function Notifications({ errors }) {
  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex flex-col items-end justify-end px-4 py-6 space-y-2 pointer-events-none sm:p-6 sm:items-start sm:justify-start z-20"
    >
      {errors.map((error) => (
        <Notification
          key={error.id}
          title={<span className="text-red-800">Something went wrong.</span>}
          message={<span className="text-red-400">{error.message}</span>}
          icon={
            <ExclamationCircleIcon
              className="w-6 h-6 text-red-800"
              aria-hidden="true"
            />
          }
        />
      ))}
    </div>
  )
}

Notifications.defaultProps = {
  errors: [],
}

Notifications.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.any, message: PropTypes.string })
  ),
}

export default Notifications
