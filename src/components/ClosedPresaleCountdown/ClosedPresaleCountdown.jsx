import React from 'react'
import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import { DateTime } from 'luxon'

function ClosedPresaleCountdown({
  days,
  hours,
  minutes,
  seconds,
  expirationDate,
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
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  expirationDate: PropTypes.number,
}

export default ClosedPresaleCountdown
