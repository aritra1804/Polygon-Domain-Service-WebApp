import React, { useEffect, useState } from "react";
import './styles/App.css';

// Constants
const GITHUB_LINK = `https://github.com/aritra1804`;
const App = () => {
	const [currentAccount, setCurrentAccount] = useState('');
    
	// Implement your connectWallet method here
	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			// Fancy method to request access to account.
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		
			// Boom! This should print out public address once we authorize Metamask.
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

	// Render Methods
	const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif" alt="Ninja donut gif" />
			{/* Call the connectWallet function we just wrote when the button is clicked */}
			<button onClick={connectWallet} className="cta-button connect-wallet-button">
				Connect Wallet
			</button>
		</div>
	);
  
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