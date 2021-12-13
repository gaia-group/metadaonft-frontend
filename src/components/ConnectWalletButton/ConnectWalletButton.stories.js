import React from 'react'
import ConnectWalletButton from './ConnectWalletButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Connect Wallet Button',
  component: ConnectWalletButton,
  args: {
    onConnected: action('onConnected'),
    onError: action('onError'),
  },
}

export function connectWalletButton(args) {
  return <ConnectWalletButton {...args} />
}
