'use client'

import TopBar from "./TopBar"
import LeftBar from "./crm/LeftBar"
import { useState } from "react"
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react'

const leftLinks = [
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


const avatarMenuLinks = [
    {
        id: '1',
        name: 'Account',
        path: '/crm/account',
        icon: <ManageAccountsIcon />,
        onClick: () => { }
    },
    {
        id: '2',
        name: 'Logout',
        path: '/logout',
        icon: <LogoutIcon />,
        onClick: () => { signOut() }
    },


]


export const CrmNavigation = ({session}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <TopBar
                links={avatarMenuLinks}
                session={session}
                setOpen={setOpen} open={open}

            />
            <LeftBar
                links={leftLinks}
                open={open}
            />

        </>
    )
}


export default CrmNavigation
