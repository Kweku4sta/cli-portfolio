import React from 'react';
import { Box, Text } from 'ink';
import gradientString from 'gradient-string';
const gradient = gradientString('cyan', 'magenta');


export default function Footer({currentPage}) {
	return (
		<Box
			borderStyle="round"
            borderBottom={false}
			borderColor="cyan"
			paddingX={2}
			paddingY={0}
			marginTop={1}
			justifyContent="center"
			width="100%"
		>
			<Text color="cyanBright">
				⚡ Built with passion by <Text color="magentaBright">Ansah Forster</Text> — {new Date().getFullYear()}
			</Text>
			<Text color="gray" dimColor>
				{gradient('──────')}
				You are currently viewing: <Text color="yellowBright">{currentPage}</Text>
				{gradient('──────')}
			</Text>


		</Box>
	);
}
