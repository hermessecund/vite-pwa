 import './App.css'


function App() {
  console.log("app rendered")
  return (
    <>
      <div>
        <a href="https://thirdweb.com" target="_blank">
          <img src="https://janati.netlify.app/dakhla1.webp" className="logo" alt="thirdweb logo" />
        </a>
      </div>
       <h1>Welcome to Janat.ma</h1>
          <p>Your solution for sustainable agriculture and landscaping in Morocco.</p>
 
      <div className="card">
        <ConnectButton chain={baseSepolia} client={client} />
      </div>
    </>
  )
}
