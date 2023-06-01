'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuList, ThemeProvider, createTheme } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react'

const customTheme = createTheme({
    typography: {
        typography: {
            color: 'black'
        }
    }
});


const pages = ['FAQ', 'Documents', 'Settings'];
const settings = ['Account', 'Logout'];


function TopBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed"
            sx={{
                zIndex: "tooltip",
                background: "-webkit-linear-gradient(45deg, rgba(24,45,161,1) 0%,rgba(0,255,174,1) 94%)"
            }}>
            <Container maxWidth='xl' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <Toolbar>
                    <AllInclusiveIcon />
                    <ThemeProvider theme={customTheme}>
                        <Typography variant="h6" sx={{ ml: 1 }}>
                            Customized CRM
                        </Typography>
                    </ThemeProvider>
                </Toolbar>


                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar>M</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px', zIndex: 'tooltip' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuList key={setting} onClick={handleCloseUserMenu}>
                                <MenuItem href={`/${setting}`}>
                                    <ListItemIcon>
                                        <ManageAccountsIcon fontSize="small" />
                                    </ListItemIcon>
                                    {setting}
                                </MenuItem>
                            </MenuList>
                        ))}
                    </Menu>
                </Box>

            </Container>
        </AppBar>
    );
}
export default TopBar;