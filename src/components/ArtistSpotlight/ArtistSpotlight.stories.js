import React from 'react'
import ArtistSpotlight from './ArtistSpotlight'

export default {
  title: 'Artist Spotlight',
  component: ArtistSpotlight,
  args: {
    className: 'm-4',
  },
}

export function artistSpotlight(args) {
  return <ArtistSpotlight {...args} />
}
