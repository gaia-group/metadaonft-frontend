---
to: <%= path %>/<%= name %>/<%= name %>.stories.js
---
import React from 'react'
import <%= name %> from './<%= name %>'

export default {
  title: '<%= name %>',
  component: <%= name %>,
  args: {
    className: 'm-4',
  },
}

export function <%= h.changeCase.camel(name) %>(args) {
  return <<%= name %> {...args} />
}
