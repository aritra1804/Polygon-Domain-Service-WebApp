import React, { useEffect, useState } from "react";
import './styles/App.css';

// Constants
const GITHUB_LINK = `https://github.com/aritra1804`;
// Add the domain you will be minting
const tld = '.alfi';
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE';

const App = () => {
	const [currentAccount, setCurrentAccount] = useState('');
	// Add some state data propertie
	const [domain, setDomain] = useState('');
  const [record, setRecord] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }
			
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}
	};

	// Render methods
	const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif" alt="Ninja donut gif" />
      {/* Call the connectWallet function we just wrote when the button is clicked */}
			<button onClick={connectWallet} className="cta-button connect-wallet-button">
				Connect Wallet
			</button>
		</div>
	);
	
	// Form to enter domain name and data
	const renderInputForm = () =>{
		return (
			<div className="form-container">
				<div className="first-row">
					<input
						type="text"
						value={domain}
						placeholder='domain'
						onChange={e => setDomain(e.target.value)}
					/>
					<p className='tld'> {tld} </p>
				</div>

				<input
					type="text"
					value={record}
					placeholder='whats ur ninja power'
					onChange={e => setRecord(e.target.value)}
				/>

				<div className="button-container">
					<button className='cta-button mint-button' disabled={null} onClick={null}>
						Mint
					</button>  
					<button className='cta-button mint-button' disabled={null} onClick={null}>
						Set data
					</button>  
				</div>

			</div>
		);
	}
  
	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="App">
			<div className="container">
	
				<div className="header-container">
					<header>
			<div className="left">
			<p className="title">👽🤖 Alfi Name Service</p>
			<p className="subtitle">Your friendly neighbourhood API on the blockchain!</p>
			</div>
					</header>
				</div>
	
				{/* Add your render method here */}
				{renderNotConnectedContainer()}
	
		<div className="footer-container">
					<a
						className="footer-text"
						href={GITHUB_LINK}
						target="_blank"
						rel="noreferrer"
					>{`Built by Aritra💖`}</a>
				</div>
			</div>
		</div>
	);
};

export default App;