'use client'

import { Paper, Typography } from '@mui/material'

export function InfoPanel({ name, children }) {

    return (
        <Paper elevation={0} sx={{
            p: 2
        }}>
            <Typography sx={{ pb: 5 }} variant='h3'>{name}</Typography>
            {children}
        </Paper>
    )
}

export default InfoPanel
