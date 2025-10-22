import React from 'react';
import { Box, Text, useInput } from 'ink';
import gradientString from 'gradient-string';

import {useFocus} from '../context/FocusContext.js';


const gradient = gradientString(['cyan', 'magenta']);

const experiences = [
	{
		role: 'Odoo Developer',
		company: 'Quantum Group',
		duration: '2025 — Present',
		details: [
			'Led development of custom Odoo modules improving workflow efficiency by 40%.',
			'Integrated Keycloak for authentication and APISIX for API gateway security.',
			'Mentored a team of developers, introducing modern CI/CD practices.'
		]
	},
	{
		role: 'Backend Engineer',
		company: 'CodeStar Hub',
		duration: '2012 — 2015',
		details: [
			'Built scalable FastAPI services for fintech and real estate clients.',
			'Developed RESTful APIs with robust test coverage and efficient SQLAlchemy integration.',
			'Collaborated with frontend teams using React and Vue.js.'
		]
	},
	{
		role: 'Frontend Developer',
		company: 'Freelance',
		duration: '2010 — 2012',
		details: [
			'Created responsive interfaces using Vue.js and React.',
			'Delivered clean, accessible UI/UX for client dashboards and admin panels.'
		]
	}
];

export default function Experience() {
	const {activeFocus, setActiveFocus} = useFocus();
	
	useInput((input, key) => {
		if (activeFocus !== 'page') return;
		if (input === 'q') {
			setActiveFocus('sidebar');
		}
	});
	return (
		<Box flexDirection="column" paddingX={1}>
			<Text bold color="cyanBright">
				{gradient('💼 Experience')}
			</Text>

			{experiences.map((exp, index) => (
				<Box key={index} flexDirection="row" marginTop={1}>
					<Box flexDirection="column" marginRight={1}>
						<Text color="magenta">●</Text>
						{index < experiences.length - 1 && <Text color="gray">│</Text>}
					</Box>

					<Box flexDirection="column">
						<Text bold color="magentaBright">{exp.role}</Text>
						<Text color="cyan">{exp.company}</Text>
						<Text dimColor>{exp.duration}</Text>
						<Box flexDirection="column" marginTop={0}>
							{exp.details.map((line, i) => (
								<Text key={i}>• {line}</Text>
							))}
						</Box>
					</Box>
				</Box>
			))}

			<Box marginTop={1}>
				<Text dimColor>↑↓ Navigate using sidebar • Built with ❤️ in React Ink</Text>
				<Text dimColor>
					Press <Text color="magentaBright">Q</Text> anytime to exit
				</Text>
			</Box>
		</Box>
	);
}
