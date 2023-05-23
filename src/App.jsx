import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Project from './views/Project'
import { ToastContainer } from 'react-toastify'

import {RainbowKitProvider,connectorsForWallets} from "@rainbow-me/rainbowkit";
import {metaMaskWallet} from "@rainbow-me/rainbowkit/wallets";
import '@rainbow-me/rainbowkit/styles.css';
import {configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { BananaWallet } from '@rize-labs/banana-rainbowkit-plugin'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const App = () => {

  const GnosisChain = {
    id: 100,
    name: 'Gnosis Chain',
    network: 'Gnosis',
    nativeCurrency: {
      decimals: 18,
      name: 'xDai',
      symbol: 'xDai',
    },
    rpcUrls: {
      default: 'https://rpc.ap-southeast-1.gateway.fm/v4/gnosis/non-archival/mainnet',
    },
    blockExplorers: {
      default: { name: 'Blockscout', url: 'https://gnosisscan.io/' },
    },
    iconUrls: ["https://images.prismic.io/koinly-marketing/16d1deb7-e71f-48a5-9ee7-83eb0f7038e4_Gnosis+Chain+Logo.png"],
    testnet: false,
  }

  const ChiadoChain = {
    id: 10200,
    name: 'Chiado Chain',
    network: 'Chiado',
    nativeCurrency: {
      decimals: 18,
      name: 'xDai',
      symbol: 'xDai',
    },
    rpcUrls: {
      default: 'https://rpc.chiadochain.net',
    },
    blockExplorers: {
      default: { name: 'Blockscout', url: 'https://blockscout.com/gnosis/chiado' },
    },
    iconUrls: ["https://images.prismic.io/koinly-marketing/16d1deb7-e71f-48a5-9ee7-83eb0f7038e4_Gnosis+Chain+Logo.png"],
    testnet: true,
  }

  const { chains, provider } = configureChains(
    [ChiadoChain, GnosisChain],
    [
      jsonRpcProvider({
        rpc: chain => ({ http: chain.rpcUrls.default }),
      }),
    ],[publicProvider()],
  );

const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        BananaWallet({ chains, connect: { networkId: 100 } }),
        metaMaskWallet({ chains, shimDisconnect: true }),
      ],
    },
  ]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <div className="min-h-screen relative">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
