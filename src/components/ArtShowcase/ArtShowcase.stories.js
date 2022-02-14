import React from 'react'
import ArtShowcase from './ArtShowcase'

export default {
  title: 'Art Showcase',
  component: ArtShowcase,
  args: {},
}

export function artShowcase(args) {
  return <ArtShowcase {...args} />
}
