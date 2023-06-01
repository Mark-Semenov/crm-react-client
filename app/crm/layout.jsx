
'use client'

import LeftBar from "@/components/crm/LeftBar";
import { CssBaseline, Box, Container } from "@mui/material"

import TopBar from "@/components/TopBar";

export default function CrmLayout({ children }) {

    return (
        <>
            <CssBaseline />
            <TopBar />
            <main>
                <Box sx={{
                    mt: '100px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <LeftBar />
                    </Box>
                    <Container maxWidth='lg'>
                        {children}
                    </Container>

                </Box>

            </main>

        </>
    )

}