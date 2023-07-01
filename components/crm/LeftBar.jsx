import {
    Box, Toolbar, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';

import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Logo from '@components/Logo';

const drawerWidth = 270;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export const LeftBar = ({ open, links }) => {


    return (

        <Drawer variant="permanent" open={open}>
            <Toolbar >
                <Logo/>
            </Toolbar>
            <List>
                {links.map((item) => (
                    <ListItem key={item.id} sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            href={`${item.link}`} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>

    )
}


export default LeftBar