import React, { useEffect } from 'react';
import { Box } from 'ink';

export default function ContentWrapper({ children }) {
	useEffect(() => {
		process.stdout.write('\x1B[0J');
	}, [children]);

	return (
		<Box
			flexDirection="column"
			marginLeft={3}
			minHeight={20}
			width="90%"
			// borderStyle="round"
			// borderColor="cyan"
			paddingX={1}
			paddingY={1}
		>
			{children}
		</Box>
	);
}
