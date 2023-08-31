import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home, Settings, AccountBox, AssignmentInd, Feed, Chat, ModeNight } from '@mui/icons-material/'
  

export default function Sidebar ({mode, setMode}) {

    return(
        <>
            <Box flex={1} p={2} sx={{ width: '100px', display: {xs: 'none', md: 'block'}}}>
            <List sx={{ width: '300px'}}>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home' >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component='a' href='#listings' >
                    <ListItemIcon>
                        <AssignmentInd />
                    </ListItemIcon>
                    <ListItemText primary="Job Listings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component='a' href='#chat' >
                    <ListItemIcon>
                        <Chat />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                    <ListItemButton component='a' href='#settings' >
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component='a' href='#articles' >
                    <ListItemIcon>
                        <Feed />
                    </ListItemIcon>
                    <ListItemText primary="Articles" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component='a' href='#profile' >
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <ModeNight />
                    </ListItemIcon>
                    <ListItemText primary="Dark Mode" />
                    <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </>
    )
}