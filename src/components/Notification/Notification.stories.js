import React from 'react'
import Notification from './Notification'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

export default {
  title: 'Notification',
  component: Notification,
  args: {
    disappear: false,
    title: 'Something went wrong.',
    message: 'Nevermind, actually. No big deal.',
    icon: (
      <ExclamationCircleIcon
        className="w-6 h-6 text-red-800"
        aria-hidden="true"
      />
    ),
  },
}

export function notification(args) {
  return <Notification {...args} />
}
