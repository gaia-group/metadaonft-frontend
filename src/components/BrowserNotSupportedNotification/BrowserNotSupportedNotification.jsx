import React from 'react'

function BrowserNotSupportedNotification() {
  return (
    <div className="max-w-md m-6 text-center bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-6 text-red-800">
          <p>This browser is not supported.</p>
        </h3>
        <div className="max-w-xl mt-2 text-sm text-red-600">
          <p>Please use Brave, Chrome or Firefox with Metamask.</p>
        </div>
      </div>
    </div>
  )
}

BrowserNotSupportedNotification.defaultProps = {}

BrowserNotSupportedNotification.propTypes = {}

export default BrowserNotSupportedNotification
