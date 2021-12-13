import React from 'react'
import Notifications from './Notifications'

export default {
  title: 'Notifications',
  component: Notifications,
  args: {
    className: 'm-4',
  },
}

export function notifications(args) {
  return <Notifications {...args} />
}
