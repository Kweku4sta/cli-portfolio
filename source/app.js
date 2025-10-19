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

export default function App() {
	const [currentPage, setCurrentPage] = useState('About');

	useEffect(() => {
		process.stdout.write('\x1Bc');
		console.clear();
	}, [currentPage]);

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
	return (
		<Box flexDirection="column" borderStyle="round" borderColor="cyan">
			<Header />
				<Box flexDirection="row" marginTop={1}>
				<Sidebar onSelect={setCurrentPage}  />
				<Box marginLeft={3}>{renderPage()}</Box>
			</Box>
			<Footer />
		</Box>
	);
}
