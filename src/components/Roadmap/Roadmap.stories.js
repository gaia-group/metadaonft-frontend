import React from 'react'
import Roadmap from './Roadmap'

export default {
  title: 'Roadmap',
  component: Roadmap,
  args: {
    className: 'm-4',
  },
}

export function roadmap(args) {
  return <Roadmap {...args} />
}
