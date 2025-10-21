// components/TransitionWrapper.js
import React, { useEffect, useState } from 'react';
import { Box } from 'ink';
import TextAnimation from 'ink-text-animation';

export default function TransitionWrapper({ children }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(timer);
	}, [children]);

	return (
		<Box flexDirection="column" width="100%">
			{visible ? (
				<TextAnimation type="pulse" speed={0.5}>
					{children}
				</TextAnimation>
			) : null}
		</Box>
	);
}
