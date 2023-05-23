const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const taxFee = 5
  const Contract = await hre.ethers.getContractFactory('Gnobacker')
  const contract = await Contract.deploy(taxFee)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4) 
  console.log('Deployed contract address', address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})