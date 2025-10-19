import React from 'react';
import { Box, Text } from 'ink';

export default function Footer() {
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
		</Box>
	);
}
