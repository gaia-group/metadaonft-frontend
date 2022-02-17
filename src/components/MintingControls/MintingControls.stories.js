import React from 'react'
import MintingControls from './MintingControls'

export default {
  title: 'MintingControls',
  component: MintingControls,
  args: {
    className: 'm-4',
  },
}

export function mintingControls(args) {
  return <MintingControls {...args} />
}
