import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import ReactGA from 'react-ga'

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from 'ethers'

import Notifications from './Notifications/Notifications'

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from '../contracts/MetaDaoNft.json'
import contractAddress from '../contracts/contract-address.json'
import LinksSection from './LinksSection/LinksSection'
// import etherscanSocialLogo from '../images/etherscan-social-logo.svg'
import discordSocialLogo from '../images/discord-social-logo.svg'
// import openseaSocialLogo from '../images/opensea-social-logo.svg'
import twitterSocialLogo from '../images/twitter-social-logo.svg'
import Header from './Header/Header'
import ArtShowcase from './ArtShowcase/ArtShowcase'
import ArtistSpotlight from './ArtistSpotlight/ArtistSpotlight'
import FAQ from './FAQ/FAQ'
import { getWhitelistParams } from '../utilities/merkleTrees'

const navigation = {
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/bKtJ2nC2Rk',
      icon: (props) => (
        <SVG src={discordSocialLogo} title="Discord" {...props} />
      ),
    },
    // FIXME: Uncomment when we go live.
    // {
    //   name: 'OpenSea',
    //   href: 'https://opensea.io/meta-dao-nft',
    //   icon: (props) => (
    //     <SVG src={openseaSocialLogo} title="OpenSea" {...props} />
    //   ),
    // },
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

ReactGA.initialize('UA-220614618-2')

export default function MetaDaoNft() {
  const [networkId, setNetworkId] = useState(null)
  const [account, setAccount] = useState(null)
  const [ethBalance, setEthBalance] = useState(null)
  const [contract, setContract] = useState(null)
  const [tokens, setTokens] = useState([])
  const [errors, setErrors] = useState([])
  const [isWrongNetwork, setIsWrongNetwork] = useState(true)
  const [isBlockedByWhitelist, setIsBlockedByWhitelist] = useState(true)
  const [isPublicMintingAllowed, setIsPublicMintingAllowed] = useState(false)
  const [totalSupply, setTotalSupply] = useState('0')

  ReactGA.pageview(window.location.pathname)

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
        const isWrongNetwork =
          (await newProvider.getCode(contractAddress.MetaDaoNft)) === '0x'
        setNetworkId(chainId)
        setIsWrongNetwork(isWrongNetwork)
        let contract = new ethers.Contract(
          contractAddress.MetaDaoNft,
          TokenArtifact.abi,
          newProvider
        )
        if (!isWrongNetwork) {
          setTotalSupply((await contract.totalSupply()).toString())
        }

        if (account) {
          contract = contract.connect(newProvider.getSigner())
          const ethBalance = await newProvider.getBalance(account)
          setAccount(account)
          setEthBalance(ethers.utils.formatEther(ethBalance).substring(0, 6))
          if (!isWrongNetwork) {
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
            setContract(contract)
            setIsPublicMintingAllowed(isPublicMintingAllowed)
            setIsBlockedByWhitelist(
              !isPublicMintingAllowed && !isUserWhitelisted
            )
          }
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
          isWrongNetwork={isWrongNetwork}
          isBlockedByWhitelist={isBlockedByWhitelist}
          isPublicMintingAllowed={isPublicMintingAllowed}
          totalSupply={totalSupply}
          contract={contract}
        />
        <ArtShowcase />
        <ArtistSpotlight />
        <div className="flex flex-col items-center justify-center mx-auto bg-gray-900 md:flex-row">
          <div className="order-last w-full max-w-3xl px-4 py-12 border-gray-700 md:order-first sm:px-6 lg:px-8 lg:py-16">
            <h2 className="py-8 mt-2 text-3xl font-extrabold tracking-tight text-left text-gray-200 sm:text-4xl">
              The Roadmap
            </h2>
            <p className="text-lg text-left text-gray-200 sm:text-2xl">
              <span className="font-extrabold text-green-300">First</span>
              {', '}
              sell 4,444 NFT collectibles.
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

        <LinksSection />
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
            All Rights Reserved © Meta DAO by Gaia Group{' '}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
      <Notifications errors={errors} />
    </>
  )
}
