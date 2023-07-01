'use client'
import { Box, Button, Container, Typography } from "@mui/material"
import Image from 'next/image'

const { default: Head } = require("next/head")

const Home = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <Container maxWidth='md'>
                <Image src='/images/IMG_0929.jpeg' fill />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    height: '800px'

                }}
                     position='relative'>
                    <Typography variant="h2" component='h1'>
                        Customized CRM
                    </Typography>

                    <Button type="button" href="/crm" variant="contained">Get Started</Button>
                </Box>


            </Container>

        </>
    )
}

export default Home