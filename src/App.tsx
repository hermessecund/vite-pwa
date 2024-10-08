import './App.css'
import { ConnectButton } from 'thirdweb/react'
import { client } from './lib/client.ts'
import { baseSepolia } from 'thirdweb/chains'

function App() {
  console.log("app rendered")
  return (
    <>
      <div>
        <a href="https://thirdweb.com" target="_blank">
          <img src="https://thirdweb.com/brand/thirdweb-icon.png" className="logo" alt="thirdweb logo" />
        </a>
      </div>
      <h1>Build a PWA with thirdweb</h1>
      <div className="card">
        <ConnectButton chain={baseSepolia} client={client} />
      </div>
    </>
  )
}

export default App
