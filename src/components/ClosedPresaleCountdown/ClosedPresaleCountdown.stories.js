import React from 'react'
import ClosedPresaleCountdown from './ClosedPresaleCountdown'

export default {
  title: 'ClosedPresaleCountdown',
  component: ClosedPresaleCountdown,
  args: {
    className: 'm-4',
  },
}

export function closedPresaleCountdown(args) {
  return <ClosedPresaleCountdown {...args} />
}
