import React from 'react'
import SuccessfulMintModal from './SuccessfulMintModal'

export default {
  title: 'SuccessfulMintModal',
  component: SuccessfulMintModal,
  args: {
    className: 'm-4',
  },
}

export function successfulMintModal(args) {
  return <SuccessfulMintModal {...args} />
}
