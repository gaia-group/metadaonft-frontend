import React from 'react'
import WalletInfoPanel from './WalletInfoPanel'

export default {
  title: 'Wallet Info Panel',
  component: WalletInfoPanel,
  args: {
    className: 'm-4',
  },
}

export function walletInfoPanel(args) {
  return <WalletInfoPanel {...args} />
}
