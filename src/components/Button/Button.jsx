import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Button({ loading, disabled, label, shadow, className, ...rest }) {
  return (
    <div className={className}>
      <button
        type="button"
        disabled={disabled}
        {...rest}
        className={classNames(
          'inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300',
          {
            'text-black bg-green-300 hover:bg-green-500': !disabled,
            'text-gray-800 bg-gray-400': disabled,
            'animate-pulse': loading,
            'shadow-md': shadow,
          }
        )}
      >
        {label}
      </button>
    </div>
  )
}

Button.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  shadow: false,
  label: '',
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  shadow: PropTypes.bool,
  label: PropTypes.string,
}

export default Button
