import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from 'ethers'

import Notifications from './Notifications/Notifications'

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from '../contracts/MetaDaoNft.json'
import contractAddress from '../contracts/contract-address.json'
import discordCover from '../images/discord-cover.png'
import openSeaLogo from '../images/opensea-logo.png'
import ethLogo from '../images/eth-logo.png'
// import etherscanSocialLogo from '../images/etherscan-social-logo.svg'
import discordSocialLogo from '../images/discord-social-logo.svg'
import openseaSocialLogo from '../images/opensea-social-logo.svg'
import twitterSocialLogo from '../images/twitter-social-logo.svg'
import Header from './Header/Header'
import FAQ from './FAQ/FAQ'
import { getWhitelistParams } from '../utilities/merkleTrees'

const navigation = {
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/cfcnwggHGv',
      icon: (props) => (
        <SVG src={discordSocialLogo} title="Discord" {...props} />
      ),
    },
    {
      name: 'OpenSea',
      href: 'https://opensea.io/meta-dao-nft',
      icon: (props) => (
        <SVG src={openseaSocialLogo} title="OpenSea" {...props} />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/metadaonft',
      icon: (props) => (
        <SVG src={twitterSocialLogo} title="Twitter" {...props} />
      ),
    },
    // {
    //   name: 'Etherscan',
    //   href: '#',
    //   icon: (props) => (
    //     <SVG src={etherscanSocialLogo} title="Etherscan" {...props} />
    //   ),
    // },
  ],
}

export default function MetaDaoNft() {
  const [networkId, setNetworkId] = useState(null)
  const [account, setAccount] = useState(null)
  const [ethBalance, setEthBalance] = useState(null)
  const [contract, setContract] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  const [tokens, setTokens] = useState([])
  const [errors, setErrors] = useState([])
  const [isWrongNetwork, setIsWrongNetwork] = useState(false)
  const [isBlockedByWhitelist, setIsBlockedByWhitelist] = useState(true)

  useEffect(() => {
    if (!window.ethereum) return

    const newProvider = new ethers.providers.Web3Provider(window.ethereum)
    newProvider.on('block', getWeb3Data)
    window.ethereum.removeAllListeners()
    window.ethereum.on('connect', getWeb3Data)
    window.ethereum.on('accountsChanged', getWeb3Data)
    window.ethereum.on('chainChanged', () => window.location.reload())

    async function getWeb3Data() {
      try {
        const [account] = await newProvider.listAccounts()
        const { chainId } = await newProvider.getNetwork()
        setNetworkId(chainId)
        const isWrongNetwork =
          (await newProvider.getCode(contractAddress.MetaDaoNft)) === '0x'
        if (account) {
          const ethBalance = await newProvider.getBalance(account)
          setAccount(account)
          setEthBalance(ethers.utils.formatEther(ethBalance).substring(0, 6))
          if (!isWrongNetwork) {
            const contract = new ethers.Contract(
              contractAddress.MetaDaoNft,
              TokenArtifact.abi,
              newProvider.getSigner()
            )
            const isPaused = await contract.paused()
            const isPublicMintingAllowed =
              await contract.isPublicMintingAllowed()
            const { proof, positions } = getWhitelistParams(account)
            const isUserWhitelisted = await contract.verifyWhitelist(
              account,
              proof,
              positions
            )
            const tokenCount = parseInt(await contract.balanceOf(account))
            const array = await Promise.all(
              Array.from({ length: tokenCount }).map(async (_, index) => {
                const tokenId = await contract.tokenOfOwnerByIndex(
                  account,
                  index
                )
                const tokenURI = await contract.tokenURI(tokenId)
                return tokenURI
              })
            )
            setTokens(array)
            setIsPaused(isPaused)
            setContract(contract)
            setIsBlockedByWhitelist(
              !isPublicMintingAllowed && !isUserWhitelisted
            )
          }
          setIsWrongNetwork(isWrongNetwork)
        } else {
          setContract(null)
          setIsPaused(false)
          setIsWrongNetwork(false)
        }
      } catch (err) {
        addError(err)
      }
    }

    getWeb3Data()

    return () => window.ethereum.removeAllListeners()
  }, [])

  function addError({ message }) {
    setErrors((errors) => [...errors, { id: errors.length, message: message }])
  }

  return (
    <>
      <div>
        <Header
          account={account}
          onError={addError}
          onConnected={setAccount}
          ethBalance={ethBalance}
          tokens={tokens}
          networkId={networkId}
          isPaused={isPaused}
          isWrongNetwork={isWrongNetwork}
          isBlockedByWhitelist={isBlockedByWhitelist}
          contract={contract}
        />
        <div className="flex flex-col items-center justify-center mx-auto bg-gray-900 md:flex-row">
          <div className="order-last w-full max-w-3xl px-4 py-12 border-gray-700 md:order-first sm:px-6 lg:px-8 lg:py-16">
            <h2 className="py-8 mt-2 text-3xl font-extrabold tracking-tight text-left text-gray-200 sm:text-4xl">
              The Roadmap
            </h2>
            <p className="text-lg text-left text-gray-200 sm:text-2xl">
              <span className="font-extrabold text-green-300">First</span>
              {', '}
              sell 10,000 NFT collectibles.
            </p>
            <p className="text-lg text-left text-gray-200 sm:text-2xl">
              <span className="font-extrabold text-green-300">Next</span>
              {', '}
              bring your collectible to life.
            </p>
            <div className="space-y-2 sm:space-y-4 pt-6 sm:pt-10">
              <p className="text-gray-200 sm:text-lg text-base">
                Giving people tools to own and access digital goods and property
                is crucial in this next phase of the internet.
              </p>

              <p className="text-gray-200 sm:text-lg text-base">
                Our first product is a collectible artwork that you can treasure
                on the blockchain forever. This collectible may be the first
                piece of digital property that you truly own.
              </p>

              <p className="text-gray-200 sm:text-lg text-base">
                This collectible represents a unique plot of land in an
                impossible universe. A universe waiting to be created and
                explored.
              </p>

              <p className="text-gray-200 sm:text-lg text-base">
                It also gives you access to future product launches – products
                that will enable you to build your own unique experiences
                easily, and that bridge the gap between your physical and
                digital spaces.{' '}
              </p>

              <p className="text-gray-200 sm:text-lg text-base">
                Our next product will work with our first collectible to achieve
                this mission, and will be unveiled in Q2 of 2022.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-black">
          <div className="hidden h-56 bg-green-300 md:block sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="object-cover w-full h-full brightness-75 saturate-0"
              src={discordCover}
              alt=""
            />
            <div className="absolute inset-0 bg-green-300 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold text-gray-300 uppercase tradcking-wider">
                Follow Us
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Join the action
              </p>
              <p className="mt-3 text-lg text-gray-300">
                All communication, collaboration and updates are shared through
                our discord and twitter accounts. We value transparency and
                engage with the community consistently.
              </p>
              <div className="flex mt-8 space-x-3">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://discord.gg/cfcnwggHGv"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-black bg-green-300 border border-transparent rounded-md hover:bg-green-500"
                  >
                    Discord
                    <SVG
                      src={discordSocialLogo}
                      title="Discord"
                      className="w-5 h-5 ml-2 fill-current"
                    />
                  </a>
                </div>
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://twitter.com/metadaonft"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-black bg-green-300 border border-transparent rounded-md hover:bg-green-500"
                  >
                    Twitter
                    <SVG
                      src={twitterSocialLogo}
                      title="Twitter"
                      className="w-5 h-5 ml-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-900 sm:bg-black">
          <div
            style={{ backgroundColor: '#5a5a5a' }}
            className="hidden h-56 overflow-hidden md:block sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2"
          >
            <img
              className="w-[75%] object-cover h-full saturate-0 brightness-75"
              style={{ backgroundColor: '#2081E2' }}
              src={openSeaLogo}
              alt=""
            />
            <div className="absolute inset-0 bg-green-300 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
            <div className="md:mr-auto md:w-1/2 md:pr-10">
              <h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">
                Review our contract
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Transparency is key
              </p>
              <p className="mt-3 text-lg text-gray-300">
                Our contract will be verified and available for review before
                launch, and we can answer questions about the contract in our
                discord.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-800 bg-gray-400 border border-transparent rounded-md cursor-not-allowed"
                  >
                    Coming soon...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-black">
          <div
            className="hidden h-56 overflow-hidden md:block sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
            style={{ backgroundColor: '#606060' }}
          >
            <img
              className="w-[75%] h-full object-cover brightness-75 saturate-0 translate-x-52"
              src={ethLogo}
              alt=""
            />
            <div className="absolute inset-0 bg-green-300 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">
                Find us on OpenSea
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                See the collection
              </p>
              <p className="mt-3 text-lg text-gray-300">
                The Meta DAO collection is available on OpenSea, where you can
                monitor all sales activity.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://discord.gg/cfcnwggHGv"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-black bg-green-300 border border-transparent rounded-md hover:bg-green-500"
                  >
                    Go to OpenSea
                    <SVG
                      src={openseaSocialLogo}
                      title="OpenSea"
                      className="w-5 h-5 ml-2 fill-current"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        <footer className="bg-black border-t border-gray-800">
          <div className="flex justify-center py-8 space-x-10">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="w-10 h-10 text-gray-300 fill-current hover:opacity-90"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <p className="py-5 text-center text-gray-300">
            All Rights Reserved © Meta DAO by Gaia Group 2021
          </p>
        </footer>
      </div>
      <Notifications errors={errors} />
    </>
  )
}
