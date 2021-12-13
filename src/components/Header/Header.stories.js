import React from 'react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
  args: {},
}

export function header(args) {
  return <Header {...args} />
}
