import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Short from './components/Short';
import Intro from './components/Intro';
import Benefit from './components/Benefit';
import Review from './components/Review';
import Faq from './components/Faq';
import Howto from './components/Howto';
import Connect from './components/Connect';
import { IsDesktop } from './utils/mediaQuery';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
			<Short />
			<Intro isDesktop={IsDesktop()} />
			<Benefit />
			<Review />
			<Faq />
			<Howto />
			<Connect />
		</>
	);
};

export default App;