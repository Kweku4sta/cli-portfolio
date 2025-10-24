import React, { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
import gradientString from 'gradient-string';



import {useFocus} from '../context/FocusContext.js';



const Sidebar = ({ onSelect }) => {
	const sections = [ 'About', 'Skills', 'Projects','Contact', 'Experience' ];
	const [activeIndex, setActiveIndex] = useState(0);
	const gradient = gradientString('cyan', 'magenta');


	const {activeFocus, setActiveFocus} = useFocus();


    useEffect(() => {
		onSelect(sections[activeIndex]);
	}, [activeIndex]);


	useInput((input, key) => {
        if (activeFocus !== 'sidebar') return;


		if (key.upArrow) {
			setActiveIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
		} else if (key.downArrow) {
			setActiveIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
		}
		if (key.return) {
		onSelect(sections[activeIndex]);
		setActiveFocus('page');
		}
	});

    

	
	return (
		<Box flexDirection="column" paddingLeft={1} borderStyle="round" borderColor="magenta" height="100%">
			<Text color="cyanBright" bold>
				Navigation
			</Text>
			<Box flexDirection="column" marginTop={1} >
				{sections.map((section, index) => {
					const isActive = index === activeIndex;
					const textColor = isActive ? 'magentaBright' : 'gray';
					const prefix = isActive ? gradient('▸') : ' ';
					return (
						<Text key={section}>
							{prefix} <Text color={textColor}>{section}</Text>
						</Text>
					);
				})}
			</Box>
		</Box>
	);
};

export default Sidebar;
