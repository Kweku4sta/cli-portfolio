import React from 'react';
import { Box, Text } from 'ink';
import gradientString from 'gradient-string';

const gradient = gradientString('cyan', 'magenta');

const About = () => (
	<Box flexDirection="column" paddingLeft={2}>
		<Text>
			{gradient('╭──────────────────────────────╮')}
		</Text>
		<Text>
			{gradient('│          About Me            │')}
		</Text>
		<Text>
			{gradient('╰──────────────────────────────╯')}
		</Text>

		<Box marginTop={1} flexDirection="column" width={60}>
			<Text color="whiteBright">
				Hey there 👋 I'm <Text color="magentaBright" bold>Ansah Forster</Text>,
				a passionate full-stack developer from Tema, Ghana.
			</Text>
			<Text color="gray">
				I love building powerful backends with <Text color="cyanBright">Python</Text> and
				interactive frontends with <Text color="magentaBright">React</Text>.
			</Text>
			<Text color="whiteBright" marginTop={1}>
				My mission is to build solutions that merge creativity, efficiency, and purpose.
			</Text>
			<Text color="gray" marginTop={1}>
				💡 Motto: "What you know has nothing to do with your progress.. its What you learn."
			</Text>
		</Box>
	</Box>
);

export default About;
