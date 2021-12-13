---
to: <%= path %>/<%= name %>/<%= name %>.jsx
---
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function <%= name %>({ className, ...rest }) {
  return (
    <div {...rest} className={className}>
      Component
    </div>
  )
}

<%= name %>.defaultProps = {}

<%= name %>.propTypes = {
  className: PropTypes.string,
}

export default <%= name %>
