import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import gradientString from 'gradient-string';

import {useFocus} from '../context/FocusContext.js';


export default function Projects() {
	const [cursor, setCursor] = useState(0);
	const [expanded, setExpanded] = useState(false);

	const {activeFocus, setActiveFocus} = useFocus();

	const projects = [
		{
			title: '🏡 Estate Property Management System',
			stack: 'FastAPI, Vue.js, PostgreSQL',
			description: 'A real estate platform connecting salespersons, buyers, and admins with property listings, offers, and analytics.',
			link: 'https://github.com/Kweku4sta/real-estate-property'
		},
		{
			title: '🚰 Smart Water Supply Management',
			stack: 'ESP32, Flutter, Firebase',
			description: 'IoT system monitoring and optimizing urban water supply with real-time analytics and control.',
			link: 'https://github.com/DTheOdds/Frontend-dev'
		},
		{
			title: '📚 E-High Learning Platform',
			stack: 'React, Node.js, MongoDB',
			description: 'An interactive online learning platform offering courses, assessments, and live classroom features.',
			link: 'https://github.com/swe-code-craft/e-high'
		}
	];

	useInput((input, key) => {
		if (activeFocus !== 'page') return;
		if (key.upArrow) setCursor((cursor - 1 + projects.length) % projects.length);
		if (key.downArrow) setCursor((cursor + 1) % projects.length);
		if (key.return){
			process.stdout.write('\x1Bc');
			setExpanded(!expanded);
		}
			//  setExpanded(!expanded);
		if (input === 'b') {
			setActiveFocus('sidebar');
		}	
	});

    

	const gradient = gradientString(['cyan', 'magenta']);

	return (
		<Box flexDirection="column" paddingX={2}>
			<Text>
						{gradient('╭──────────────────────────────╮')}
					</Text>
					<Text>
						{gradient('│     🚀 My Projects            │')}
					</Text>
					<Text>
						{gradient('╰──────────────────────────────╯')}
					</Text>
			{/* <Text bold>{gradient('🚀 My Projects')}</Text> */}
			<Text color="gray">Use ↑ ↓ to browse projects, press Enter to expand/collapse.</Text>
			

			<Box flexDirection="column" marginTop={1}>
				{projects.map((project, index) => {
					const isActive = index === cursor;

					return (
						<Box key={project.title} flexDirection="column" marginBottom={1}>
							<Text color={isActive ? 'cyanBright' : 'white'}>
								{isActive ? '👉 ' : '   '}
								<Text color={isActive ? 'magentaBright' : 'white'}>{project.title}</Text>
							</Text>

							{isActive && expanded && (
								<Box flexDirection="column" marginLeft={4}>
									<Text color="cyanBright">Stack: {project.stack}</Text>
									<Text color="white">{project.description}</Text>
									<Text color="magentaBright">🔗 {project.link}</Text>
								</Box>
							)}
						</Box>
					);
				})}
			</Box>

			<Box marginTop={1}>
				<Text dimColor>
					Press <Text color="magentaBright">Enter</Text> to toggle details, or <Text color="cyanBright">↑ ↓</Text> to navigate.
				</Text>
				<Text dimColor>
				Press <Text color="magentaBright">b</Text> anytime to go back to the sidebar.
				</Text>
			</Box>
		</Box>
	);
}
