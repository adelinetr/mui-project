import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box , Stack, ThemeProvider, createTheme } from '@mui/material'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'}>
       <Navbar />
       <Stack direction='row' spacing={3} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
        </Stack>
    </Box>
    </ThemeProvider>
  );
}