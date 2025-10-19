import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';

export default function Contact() {
	const { exit } = useApp();
	const [cursor, setCursor] = useState(0);
	const [selected, setSelected] = useState(false);

	const contactOptions = [
		{ label: '📧 Email', value: 'ansahforster.dev@gmail.com' },
		{ label: '💼 LinkedIn', value: 'linkedin.com/in/ansahforster' },
		{ label: '🐙 GitHub', value: 'github.com/ansahforster' },
		{ label: '🌐 Portfolio', value: 'ansahforster.dev' },
	];

	useInput((input, key) => {
		if (key.upArrow) setCursor((cursor - 1 + contactOptions.length) % contactOptions.length);
		if (key.downArrow) setCursor((cursor + 1) % contactOptions.length);
		if (key.return) setSelected(!selected);
		if (input === 'q') exit();
	});

	return (
		<Box flexDirection="column" paddingX={2}>
			<Text color="magentaBright" bold>
				✨ Let's Connect
			</Text>
			<Text color="cyanBright">
				Use ↑ ↓ to browse, Enter to reveal, or press Q to quit.
			</Text>

			<Box flexDirection="column" marginTop={1}>
				{contactOptions.map((item, index) => (
					<Box key={item.label}>
						<Text color={cursor === index ? 'cyanBright' : 'gray'}>
							{cursor === index ? '👉 ' : '   '}
						</Text>
						<Text color={cursor === index ? 'magentaBright' : 'white'}>
							{item.label}
						</Text>
						{cursor === index && selected && (
							<Text color="cyanBright"> — {item.value}</Text>
						)}
					</Box>
				))}
			</Box>

			<Box marginTop={1}>
				<Text dimColor>
					Press <Text color="magentaBright">Q</Text> anytime to exit
				</Text>
			</Box>
		</Box>
	);
}