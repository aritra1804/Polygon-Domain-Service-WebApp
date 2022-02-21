import React from 'react';
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const GITHUB_LINK = `https://github.com/aritra1804`;

const App = () => {

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
}

export default App;
