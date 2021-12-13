const keccak256 = require('keccak256')
const { MerkleTree } = require('merkletreejs')
const whitelist = require('../whitelist.json')

function bufferToHex(buffer) {
  return '0x' + buffer.toString('hex')
}

function getWhitelistParams(address, whitelistTree) {
  if (!whitelistTree) whitelistTree = createWhitelistTree(whitelist)

  const leaf = keccak256(address)

  return {
    proof: whitelistTree.getProof(leaf).map((x) => bufferToHex(x.data)),
    positions: whitelistTree
      .getProof(leaf)
      .map((x) => (x.position === 'right' ? 1 : 0)),
  }
}

function createWhitelistTree(whitelistedAddresses) {
  const leaves = whitelistedAddresses.map((x) => keccak256(x))
  return new MerkleTree(leaves, keccak256)
}

function rootFrom(tree) {
  return bufferToHex(tree.getRoot())
}

module.exports = { getWhitelistParams, createWhitelistTree, rootFrom }
