import React from 'react'
import LoadingCountdown from './LoadingCountdown'

export default {
  title: 'LoadingCountdown',
  component: LoadingCountdown,
  args: {
    className: 'm-4',
  },
}

export function loadingCountdown(args) {
  return <LoadingCountdown {...args} />
}
