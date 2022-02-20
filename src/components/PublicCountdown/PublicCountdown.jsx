import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { default as ReactCountdown } from 'react-countdown'
import { PUBLIC_LAUNCH_DATETIME } from '../Countdown/Countdown'

function PublicCountdown({ lastRecordedTime, isWrongNetwork, totalSupply }) {
  return (
    <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black space-y-2">
      <ReactCountdown
        date={PUBLIC_LAUNCH_DATETIME.valueOf()}
        now={() => lastRecordedTime}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (!completed) {
            return (
              <>
                <p>Pre-sale is live</p>
                <p>
                  Public starts in
                  <span className="tracking-wider text-green-300 font-mono ml-2">
                    {hours ? `${hours}:` : null}
                    {hours ? String(minutes).padStart(2, '0') : minutes}:
                    {String(seconds).padStart(2, '0')}
                  </span>
                </p>
              </>
            )
          } else {
            return <p>Public minting is live</p>
          }
        }}
      />
      <p className="tracking-wider text-green-300">
        {isWrongNetwork
          ? '⚠️ Must connect to mainnet'
          : `${totalSupply}/4444 minted`}
      </p>
    </div>
  )
}

PublicCountdown.defaultProps = {}

PublicCountdown.propTypes = {
  lastRecordedTime: PropTypes.object,
  isWrongNetwork: PropTypes.bool,
  totalSupply: PropTypes.number,
}

export default PublicCountdown
