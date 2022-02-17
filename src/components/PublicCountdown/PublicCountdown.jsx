import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactCountdown } from 'react-countdown'
import { PUBLIC_LAUNCH_DATETIME } from '../Countdown/Countdown'

function PublicCountdown({ lastRecordedTime, isWrongNetwork, totalSupply }) {
  return (
    <ReactCountdown
      date={PUBLIC_LAUNCH_DATETIME.valueOf()}
      now={() => lastRecordedTime}
      renderer={({ hours, minutes, seconds, completed }) => {
        if (!completed) {
          return (
            <div className="flex justify-center items-center text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black pt-10 space-y-2">
              <p>Pre-sale is open</p>
              <div>
                <p>
                  Public starts in
                  <span className="tracking-wider text-green-300 font-mono ml-2">
                    {hours ? `${hours}:` : null}
                    {hours ? String(minutes).padStart(2, '0') : minutes}:
                    {String(seconds).padStart(2, '0')}
                  </span>
                </p>
              </div>
            </div>
          )
        } else {
          return (
            <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black pt-10 space-y-2">
              <p>Public minting is open</p>
              <p className="tracking-wider text-green-300">
                {isWrongNetwork
                  ? '⚠️ Must connect to mainnet'
                  : `${totalSupply}/4444 minted`}
              </p>
            </div>
          )
        }
      }}
    />
  )
}

PublicCountdown.defaultProps = {}

PublicCountdown.propTypes = {
  lastRecordedTime: PropTypes.object,
  isWrongNetwork: PropTypes.bool,
  totalSupply: PropTypes.number,
}

export default PublicCountdown
