import React from 'react'
import FAQ from './FAQ'

export default {
  title: 'FAQ',
  component: FAQ,
  args: {
    className: 'm-4',
  },
}

export function faq(args) {
  return <FAQ {...args} />
}
faq.storyName = 'FAQ'
