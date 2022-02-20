import React from 'react'
import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import { DateTime } from 'luxon'

import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton'

function ClosedPresaleCountdown({
  days,
  hours,
  minutes,
  seconds,
  expirationDate,
  isBlockedByWhitelist,
  account,
  onConnected,
  onError,
}) {
  const isPresaleToday = days === 0
  const isPresaleTomorrow = days === 1
  const isPresaleInDays = days > 1

  return (
    <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black pt-10">
      {isPresaleToday && (
        <>
          <p>Pre-sale starts in</p>
          <p className="tracking-wider text-green-300 font-mono">
            {hours ? `${hours}:` : null}
            {hours ? String(minutes).padStart(2, '0') : minutes}:
            {String(seconds).padStart(2, '0')}
          </p>
          <div className="pt-10">
            {!account && window.ethereum && (
              <div className="space-y-5">
                <p>Connect your wallet to check whitelist status.</p>
                <ConnectWalletButton
                  onConnected={onConnected}
                  onError={onError}
                />
              </div>
            )}
            <p>
              {account &&
                isBlockedByWhitelist &&
                'You are not on the whitelist.'}
              {account &&
                !isBlockedByWhitelist &&
                "Get ready - you're on the whitelist"}
            </p>
          </div>
        </>
      )}
      {isPresaleTomorrow && (
        <>
          Presale starts in{' '}
          <span className="text-green-300">
            {pluralize('hour', 24 + hours, true)}
          </span>
        </>
      )}
      {isPresaleInDays && (
        <>
          <span className="text-green-300">Pre-sale</span> starts at{' '}
          <p>
            {DateTime.fromMillis(expirationDate).toLocaleString(
              DateTime.DATETIME_FULL
            )}{' '}
          </p>
        </>
      )}{' '}
    </div>
  )
}

ClosedPresaleCountdown.defaultProps = {}

ClosedPresaleCountdown.propTypes = {
  account: PropTypes.string,
  days: PropTypes.number,
  hours: PropTypes.number,
  onError: PropTypes.func,
  onConnected: PropTypes.func,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  expirationDate: PropTypes.number,
  isBlockedByWhitelist: PropTypes.bool,
}

export default ClosedPresaleCountdown
