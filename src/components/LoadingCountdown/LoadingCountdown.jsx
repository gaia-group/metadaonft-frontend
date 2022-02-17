import React from 'react'
import PropTypes from 'prop-types'

function LoadingCountdown() {
  return (
    <h2 className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black pt-10 h-32">
      Loading...
    </h2>
  )
}

LoadingCountdown.defaultProps = {}

LoadingCountdown.propTypes = {
  className: PropTypes.string,
}

export default LoadingCountdown
