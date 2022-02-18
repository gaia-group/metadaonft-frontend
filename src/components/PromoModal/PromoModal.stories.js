import React from 'react'
import PromoModal from './PromoModal'

export default {
  title: 'PromoModal',
  component: PromoModal,
  args: {
    className: 'm-4',
  },
}

export function promoModal(args) {
  return <PromoModal {...args} />
}
