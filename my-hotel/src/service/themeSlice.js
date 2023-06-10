import { createSlice, current } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from '../components/theme/index'
import { getLocalStorage, setLocalStorage } from '../utils/localStore'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: getLocalStorage("theme") || lightTheme,
    },
    reducers: {
        changeTheme: (state) => {
            const theme = current(state.currentTheme)
            theme === lightTheme ? state.currentTheme = darkTheme : state.currentTheme = lightTheme
            setLocalStorage("theme", theme)
            
        },
        
    },
})

export const { changeTheme } = themeSlice.actions