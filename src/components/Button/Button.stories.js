import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  args: { label: 'Button' },
}

export function button(args) {
  return <Button {...args} />
}
