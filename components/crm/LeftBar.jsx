import {
    Box, Drawer, Toolbar, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';


export const LeftBar = () => {

    const menuLinks = [
        {
            id: 1,
            name: 'Customers',
            link: '/crm/customers',
            icon: <PeopleIcon />,
        },
        {
            id: 2,
            name: 'Companies',
            link: '/crm/companies',
            icon: <BusinessIcon />
        }
    ]

    return (
        <Box>
            <Drawer
                variant="permanent"
                sx={{
                    width: '250px',
                    flexShrink: 0,
                    backgroundColor: '#fcfcfc',
                    [`& .MuiDrawer-paper`]: { width: '250px', boxSizing: 'border-box' },
                }}>
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuLinks.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemButton href={`${item.link}`} >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}


export default LeftBar