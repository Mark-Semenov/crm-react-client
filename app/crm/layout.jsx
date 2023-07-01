
'use client';

import { CssBaseline, Box, Toolbar } from "@mui/material"

import { CrmNavigation } from "@components/CrmNavigation";
import { Protected } from "@components/Protected";
import { useSession } from "next-auth/react"


export default function CrmLayout({ children }) {

    const { data: session } = useSession()

    return (
        <>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <CrmNavigation session={session} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Protected>
                        {children}
                    </Protected>

                </Box>
            </Box>

        </>
    )

}