import React, {useEffect, useState} from 'react';
import { Box, Text } from 'ink';
import gradientString from 'gradient-string';
import figlet from 'figlet';
import { rainbow } from 'gradient-string';

const Header = () => {
    const gradient = gradientString(['cyan', 'magenta', 'purple']);
	const name = figlet.textSync('Ansah Forster', { font: 'Standard' });
	const role = 'Software Engineer';
	const stack = 'Python • JavaScript • FastAPI • Odoo • React';
    const message = "Ansah Forster — Software Engineer ⚡";

    const messages = [
	"Ansah Forster — Software Engineer ⚡",
	"Backend Developer | Python & JavaScript 💻",
	"API & System Integrator 🌐",
	"Building the Future with Code 🚀"
    ];

    const [displayedText, setDisplayedText] = useState('');
	const [index, setIndex] = useState(0); // character index
	const [messageIndex, setMessageIndex] = useState(0); // which message
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentMessage = messages[messageIndex];
		let timeout;

		if (!isDeleting && index < currentMessage.length) {
			// typing forward
			timeout = setTimeout(() => {
				setDisplayedText(currentMessage.slice(0, index + 1));
				setIndex(index + 1);
			}, 80);
		} else if (isDeleting && index > 0) {
			// deleting backward
			timeout = setTimeout(() => {
				setDisplayedText(currentMessage.slice(0, index - 1));
				setIndex(index - 1);
			}, 40);
		} else if (!isDeleting && index === currentMessage.length) {
			// pause before deleting
			timeout = setTimeout(() => setIsDeleting(true), 1500);
		} else if (isDeleting && index === 0) {
			// move to next message
			timeout = setTimeout(() => {
				setIsDeleting(false);
				setMessageIndex((messageIndex + 1) % messages.length);
			}, 600);
		}

		return () => clearTimeout(timeout);
	}, [index, isDeleting, messageIndex]);



	return (
		<Box
			flexDirection="column"
			alignItems="center"
			borderStyle="round"
            borderTop={false}
            borderLeft={false}
            borderRight={false}
            borderBottomColor="cyan"
			paddingX={2}
			paddingY={0}
			marginBottom={0}
		>
            <Text bold color="green">{rainbow(name)}</Text>
            <Text bold>
				{gradient(displayedText)}
				<Text color="magentaBright">▌</Text>
			</Text>
			<Text color="gray">{role}</Text>
			<Text color="magenta">{stack}</Text>
		</Box>
	);
};

export default Header;

