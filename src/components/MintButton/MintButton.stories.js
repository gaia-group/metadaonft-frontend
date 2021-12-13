import React from 'react'
import { action } from '@storybook/addon-actions'

import MintButton from './MintButton'

export default {
  title: 'Mint Button',
  component: MintButton,
  args: {
    onError: action('onError'),
  },
}

export function mintButton(args) {
  return <MintButton {...args} />
}
