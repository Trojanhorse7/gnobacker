import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5 bg-white shadow-lg fixed top-0 left-0 right-0"
    >
      <Link
        to="/"
        className="flex justify-start items-center
      text-xl text-black space-x-1"
      >
        <span>GnoBacker</span>
        <TbBusinessplan />
      </Link>

      <div className="flex space-x-2 justify-center">
        <ConnectButton />
      </div>
    </header>
  )
}

export default Header
