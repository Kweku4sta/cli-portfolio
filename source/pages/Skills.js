import React from 'react';
import { Box, Text, useInput } from 'ink';
import gradientString from 'gradient-string';

import {useFocus} from '../context/FocusContext.js';



const gradient = gradientString('cyan', 'magenta');

const skills = [
	{
		category: 'Languages',
		items: ['Python 🐍', 'JavaScript 💛', 'TypeScript', 'SQL'],
	},
	{
		category: 'Frameworks & Libraries',
		items: ['FastAPI ⚡', 'Vue.js', 'React', 'Node.js'],
	},
	{
		category: 'Tools & Platforms',
		items: ['Docker 🐳', 'Keycloak 🔐', 'Odoo ERP', 'APISIX'],
	},
	{
		category: 'Other Skills',
		items: ['REST APIs', 'CI/CD', 'Authentication & IAM', 'System Design', 'IoT Integration', 'Database Management', 'Unit Testing', 'Agile Methodologies', 'UI/UX Principles', 'Version Control (Git)'],
	},
];

export default function Skills ()  {
	const {activeFocus, setActiveFocus} = useFocus();
	useInput((input, key) => {
		if (activeFocus !== 'page') return;
		if (key.return) {
			setActiveFocus('sidebar');
		}
	});

	return (
		<Box flexDirection="column" paddingLeft={2}>
			<Text>
						{gradient('╭──────────────────────────────╮')}
					</Text>
					<Text>
						{gradient('│     ⚙️  Technical Skills    │')}
					</Text>
					<Text>
						{gradient('╰──────────────────────────────╯')}
					</Text>
			{/* <Text>{gradient('⚙️  Technical Skills')}</Text> */}
			<Box flexDirection="column" marginTop={1}>
				{skills.map(({ category, items }) => (
					<Box key={category} flexDirection="column" marginBottom={1}>
						<Text color="cyanBright" bold>
							{category}
						</Text>
						<Box flexDirection="column" marginLeft={2}>
							{items.map((skill) => (
								<Text key={skill} color="magentaBright">
									▸ {skill}
								</Text>
							))}
						</Box>
					</Box>
				))}
			</Box>
			<Text color="gray" dimColor>
				{gradient('────────────────────────────────────────────')}
			</Text>
			<Text color="cyanBright">
				💡 Constantly improving and adapting to new technologies.
			</Text>
		</Box>
	);
};

// export default Skills;
