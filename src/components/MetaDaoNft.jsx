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
import Roadmap from './Roadmap/Roadmap'
import SuccessfulMintModal from './SuccessfulMintModal/SuccessfulMintModal'
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
  const [showSuccessfulMintModal, setShowSuccessfulMintModal] = useState(false)
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
            setContract((oldContract) => {
              if (oldContract) oldContract.removeAllListeners()
              contract.on('SuccessfulMint', (_numMints, recipient) => {
                if (account === recipient) {
                  setShowSuccessfulMintModal(true)
                }
              })
              return contract
            })
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
        <Roadmap />
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
          <p className="pb-5 text-center text-gray-300">
            <a
              className="text-green-300 hover:text-green-300 text-xs"
              href="https://raritysniper.com/"
            >
              NFT Rarity
            </a>
          </p>
        </footer>
      </div>
      <Notifications errors={errors} />
      <SuccessfulMintModal
        open={showSuccessfulMintModal}
        onClose={() => setShowSuccessfulMintModal(false)}
      />
    </>
  )
}
