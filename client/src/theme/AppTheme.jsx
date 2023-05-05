import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'


export const AppTheme = ({ children }) => {

    const mode = useSelector(state => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
