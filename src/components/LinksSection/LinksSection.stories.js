import React from 'react'
import LinksSection from './LinksSection'

export default {
  title: 'LinksSection',
  component: LinksSection,
  args: {
    className: 'm-4',
  },
}

export function linksSection(args) {
  return <LinksSection {...args} />
}
