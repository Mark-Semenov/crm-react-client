
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CssBaseline, MenuList, ThemeProvider, createTheme } from '@mui/material';

import { useState } from 'react';
import { signIn } from 'next-auth/react'

import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Logo from './Logo';

const drawerWidth = 270

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    background: "-webkit-linear-gradient(45deg, rgba(24,45,161,1) 0%,rgba(0,255,174,1) 94%)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




const pages = ['FAQ', 'Documents', 'Settings'];


function TopBar({ open, setOpen, session, links }) {


    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = () => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="fixed" open={open}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    <IconButton edge="start" onClick={() => setOpen(!open)}>

                        {open ? <ChevronLeftIcon sx={{ color: 'white' }} /> : <ChevronRightIcon sx={{ color: 'white' }} />}
                    </IconButton>
                    {open ? '' : <Logo />}
                </Box>

                <Box>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>


                {session ?
                    <>
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


                            {links.map((link) => (
                                <MenuList key={link.id} onClick={() => { handleCloseUserMenu, link.onClick() }}>
                                    <MenuItem href={`${link.path}`}>
                                        <ListItemIcon>
                                            {link.icon}
                                        </ListItemIcon>
                                        {link.name}
                                    </MenuItem>
                                </MenuList>
                            ))}
                        </Menu>
                    </>
                    : (<Button onClick={() => signIn()}>Sign In</Button>)
                }
            </Toolbar>
        </AppBar>


    )
}
export default TopBar;