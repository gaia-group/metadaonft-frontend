import React from 'react'

import LoadingSpinner from './LoadingSpinner'
import { supportedSizes } from '../../utilities/tailwindClassHelpers'

export default {
  title: 'Loading Spinner',
  component: LoadingSpinner,
  args: {
    className: 'mx-auto',
    color: 'white',
    size: 5,
  },
  argTypes: {
    size: { control: { type: 'select', options: supportedSizes } },
  },
}

export function loadingSpinner(args) {
  return <LoadingSpinner {...args} />
}
