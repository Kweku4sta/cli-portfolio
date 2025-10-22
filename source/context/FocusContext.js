import React, {createContext, useContext, useState} from 'react';

const FocusContext = createContext();

export const FocusProvider = ({children}) => {
	const [activeFocus, setActiveFocus] = useState('sidebar');

	return (
		<FocusContext.Provider value={{activeFocus, setActiveFocus}}>
			{children}
		</FocusContext.Provider>
	);
};

export const useFocus = () => useContext(FocusContext);
