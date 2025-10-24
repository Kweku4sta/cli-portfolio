#!/usr/bin/env node

import React, {useState, useEffect} from 'react';
import { Box } from 'ink';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Welcome from './pages/Welcome.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Footer from './components/Footer.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Project.js';
import Experience from './pages/Experience.js';
import { FocusProvider } from './context/FocusContext.js';
import ContentWrapper from './components/ContentWrapper.js';
import TransitionWrapper from './components/TransitionWrapper.js';


export default function App() {
	const [currentPage, setCurrentPage] = useState('About');
    
		useEffect(() => {
			process.stdout.write('\x1Bc');
		}, [currentPage]);
	const [isReady, setIsReady] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => setIsReady(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const renderPage = () => {
		switch (currentPage) {
			case 'About':
				return <About />;
			case 'Skills':
				return <Skills />;
			case 'Contact':
				return <Contact />;
			case 'Projects':
				return <Projects />;
			case 'Experience':
				return <Experience />;
			case 'Welcome':
				return <Welcome onContinue={() => setCurrentPage('About')} />;
			default:
				return null;
		}

	};
	if (!isReady) {
		return null; 
	}

	return (
		<FocusProvider>
		<Box
			flexDirection="column"
			borderStyle="round"
			borderColor="cyan"
			padding={1}
			width="100%"
			minHeight={25} 
		>
			<Header />

			<Box flexDirection="row" marginTop={1} flexGrow={1}>
				<Sidebar onSelect={setCurrentPage} />
				<Box marginLeft={3} flexGrow={1} justifyContent="flex-start">
					{/* <TransitionWrapper> */}
					<ContentWrapper>
					{renderPage()}
					</ContentWrapper>
					{/* </TransitionWrapper> */}
				</Box>
			</Box>
			<Box marginTop={2}>
				<Footer currentPage={currentPage} />
			</Box>
		</Box>
		</FocusProvider>
	);
}
