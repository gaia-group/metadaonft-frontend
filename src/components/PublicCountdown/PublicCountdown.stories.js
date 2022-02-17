import React from 'react'
import PublicCountdown from './PublicCountdown'

export default {
  title: 'PublicCountdown',
  component: PublicCountdown,
  args: {
    className: 'm-4',
  },
}

export function publicCountdown(args) {
  return <PublicCountdown {...args} />
}
