import React from 'react'
import Countdown from './Countdown'

export default {
  title: 'Countdown',
  component: Countdown,
  args: {
    className: 'm-4',
  },
}

export function countdown(args) {
  return <Countdown {...args} />
}
