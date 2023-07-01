'use client';

import { Box, Button, TextField, Typography } from "@mui/material";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";


export const Login = () => {


    const [providers, setProviders] = useState({})

    useEffect(() => {
        const fetchProviders = async () => {
            const resp = await getProviders()
            setProviders(resp)
        }

        fetchProviders()
    }, [])


    const credentials = {
        username: '',
        password: ''
    }


    const [data, setData] = useState(credentials)



    const handleSubmit = async () => {

        const req = await signIn('credentials', ...data);
        const resp = await req.json()

    }


    return (
        <Box
            sx={{
                height: '800px',
                minHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    p: 5,
                    height: '400px',
                    width: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#fcfcfc',
                    borderRadius: '5px'



                }}>
                <Typography variant="h4">Please, Sign In</Typography>
                <TextField
                    fullWidth
                    type='email'
                    label="Email"
                    variant="outlined"
                    required
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                />
                <TextField
                    fullWidth
                    type='password'
                    label="Password"
                    variant="outlined"
                    required
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />

                <Button
                    type="submit"
                    sx={{ width: '100%' }}
                    size="medium"
                    variant="contained">Login</Button>

                {Object.values(providers).map((provider) => (                   
                    
                    <div key={provider.name}>
                        
                        <Button fullWidth variant="contained" onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </Button>
                    </div>
                   
                ))}
                
            </Box>
        </Box >
    )
}

export default Login