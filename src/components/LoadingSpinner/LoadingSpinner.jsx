import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  supportedSizes,
  squareOfSize,
} from '../../utilities/tailwindClassHelpers'

function LoadingSpinner({ className, size, color }) {
  function colorClass() {
    switch (color) {
      case 'red':
        return 'text-red-800'
      case 'purple':
        return 'text-purple-800'
      case 'yellow':
        return 'text-yellow-500'
      case 'teal':
        return 'text-teal-800'
      case 'pink':
        return 'text-pink-800'
      case 'blue':
        return 'text-blue-800'
      case 'green':
        return 'text-green-700'
      case 'orange':
        return 'text-orange-800'
      case 'white':
        return 'text-white'
      case 'black':
        return 'text-black'
      default:
        return 'green'
    }
  }

  /* Content from: https://tailwindcomponents.com/component/full-page-overlay-loading-screen */
  return (
    <span className={className}>
      <svg
        className={classNames(
          'animate-spin inline',
          colorClass(),
          squareOfSize(size)
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
  )
}

LoadingSpinner.defaultProps = {
  className: '',
  color: 'white',
  size: '5',
}

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'red',
    'purple',
    'yellow',
    'teal',
    'pink',
    'blue',
    'green',
    'orange',
    'white',
    'black',
  ]),
  size: PropTypes.oneOf(supportedSizes),
}

export default LoadingSpinner
