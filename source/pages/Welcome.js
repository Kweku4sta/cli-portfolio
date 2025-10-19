import React, { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
import figlet from 'figlet';
import gradientString from 'gradient-string';
import { rainbow } from 'gradient-string';

const Welcome = ({ onContinue }) => {
	const [showPrompt, setShowPrompt] = useState(false);
	const [banner, setBanner] = useState('');

	useEffect(() => {
		const text = figlet.textSync('Ansah Forster', { font: 'Standard' });
		setBanner(text);
		setTimeout(() => setShowPrompt(true), 1000);
	}, []);

	useInput((input, key) => {
		if (key.return && showPrompt) {
			onContinue(); 
		}
	});

	return (
		<Box flexDirection="column" alignItems="center" justifyContent="center" height="100%">
			<Text color="cyan">{gradientString('red', 'magenta')(banner)}</Text>
            <Text color="green">{rainbow('Welcome to my interactive CLI portfolio!')}</Text>

			<Text bold>
				Built by <Text color="yellow">Kweku Ansah</Text> — Software Engineer
			</Text>
			{showPrompt && (
				<Box marginTop={1}>
					<Text color="green">[ Press Enter to Begin ]</Text>
				</Box>
			)}
		</Box>
	);
};

export default Welcome;
