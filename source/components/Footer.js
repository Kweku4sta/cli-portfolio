import React from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

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

			<Gradient name="summer">
				<BigText text={`Focus: ${currentPage.toUpperCase()}`} font="tiny" />
			</Gradient>

		</Box>
	);
}
