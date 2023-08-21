// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;

export const useTheme = () => {
    return useContext(ThemeContext);
};
