import { AppBar, styled, Box, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material'
import Campaign from '@mui/icons-material/Campaign';
import { Mail, Notifications } from '@mui/icons-material/';
import { InputBase, Badge } from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled (Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div') (({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box) (({theme})=>({
   display:'none',
   gap:'20px',
   alignItems:'center',
   [theme.breakpoints.up('sm')]: {
    display:'flex'
   }
}))

const UserBox = styled (Box) (({theme})=> ({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    [theme.breakpoints.up('sm')]:{
        display:'none'
       }
}))


export default function Navbar (mode) {
    const [open, setOpen] = useState(false)
    return(
        <>
            <AppBar position='static'>
                <StyledToolbar>
                    <Typography variant='h6' component='h3' sx={{display:{xs:'none', sm:'block'}}}>Staffers</Typography>
                    <Campaign sx={{ display: {xs: 'block', sm: 'none'} }} />
                    <Search color='gray'><InputBase 
                    placeholder='Search...' 
                    />

                    </Search>

                    <Icons sx={{cursor:'pointer'}}>
                        <Badge badgeContent={4} color='error' >
                            <Mail color='white' />
                        </Badge>

                        <Badge  badgeContent={2} color='error' >
                            <Notifications color='white' />
                        </Badge>

                        <Avatar 
                        sx={{width:'30px', height:'30px'}}
                        src="/broken-image.jpg"
                        onClick={e=>setOpen(true)}
                         />

                    </Icons>

                    <UserBox>
                        <Avatar 
                        sx={{width:'30px', height:'30px'}} 
                        src="/broken-image.jpg"
                        onClick={e=>setOpen(true)}
                         />
                        <span>Anne</span>
                    </UserBox>

                </StyledToolbar>

                <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
            </AppBar>
        </>
    )
}