import React from 'react'
import BrowserNotSupportedNotification from './BrowserNotSupportedNotification'

export default {
  title: 'Browser Not Supported Notification',
  component: BrowserNotSupportedNotification,
  args: {
    className: 'm-4',
  },
}

export function browserNotSupportedNotification(args) {
  return <BrowserNotSupportedNotification {...args} />
}
