'use client';

import {
    Button, Box, TextField, MenuItem,
    Link, Paper, Typography
} from "@mui/material"
import { useState } from "react";


const statuses = ['GREEN', 'BLACK', 'RED']


export const Form = ({ customer }) => {

    const [isActive, setIsActive] = useState(true)
    const [dto, setDto] = useState(customer)

    async function handleSubmit() {

        try {

            const resp = await fetch('/api/update', {
                method: 'PATCH',
                body: JSON.stringify(dto)
            })

        } catch (error) {
            console.log(error)
            console.log(resp)
        }
    }



    return (

        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                p: 1
            }}>

            <TextField
                variant="outlined"
                sx={{ pb: 4 }}
                label="Firstname"
                defaultValue={dto.firstName}
                onChange={(e) => { setDto({ ...dto, firstName: e.target.value }) }}
                disabled={isActive}
                required
            ></TextField>
            <TextField
                variant="outlined"
                sx={{ pb: 4 }}
                label="Lastname"
                defaultValue={dto.lastName}
                onChange={(e) => { setDto({ ...dto, lastName: e.target.value }) }}
                disabled={isActive}
                required
            ></TextField>
            <TextField
                variant="outlined"
                sx={{ pb: 4 }}
                label="Patronymic"
                defaultValue={dto.patronymic != null ? dto.patronymic : ' '}
                onChange={(e) => { setDto({ ...dto, patronymic: e.target.value }) }}
                disabled={isActive}
            ></TextField>
            <TextField
                variant="outlined"
                sx={{ pb: 4 }}
                label="Post"
                defaultValue={dto.post}
                onChange={(e) => { setDto({ ...dto, post: e.target.value }) }}
                disabled={isActive}
                required
            ></TextField>
            <TextField
                variant="outlined"
                sx={{ pb: 4 }}
                label="Type"
                defaultValue={dto.type}
                onChange={(e) => { setDto({ ...dto, type: e.target.value }) }}
                disabled={isActive}
                required
            ></TextField>
            <TextField
                select
                variant="outlined"
                sx={{ pb: 4 }}
                label="Status"
                defaultValue={dto.status}
                disabled={isActive}
                onChange={(e) => { setDto({ ...dto, status: e.target.value }) }}
                required
            >
                {statuses.map((status, index) => (
                    <MenuItem
                        key={index} value={status}>
                        {status}
                    </MenuItem>
                ))}

            </TextField>

            {dto.emails.map((email, index) => {
                return <TextField
                    fullWidth
                    key={index}
                    variant="outlined"
                    sx={{ pb: 4 }}
                    label="Email"
                    defaultValue={email}
                    onChange={(e) => { setDto({ ...dto, emails: [e.target.value] }) }}
                    disabled={isActive}
                    required
                >

                </TextField>
            })}


            {dto.phones.map((phone, index) => {
                return <TextField
                    key={index}
                    variant="outlined"
                    sx={{ pb: 4 }}
                    label="Phone"
                    defaultValue={phone}
                    onChange={(e) => { setDto({ ...dto, phones: [e.target.value] }) }}
                    disabled={isActive}
                    required
                ></TextField>
            })}
            <Paper>
                <Link href={`/companies/${customer.companyDTO.id}`}>
                    <Typography>{customer.companyDTO.title}</Typography>
                </Link>
            </Paper>
            <Box>
                <Button type="button" onClick={() => (setIsActive(() => !isActive))}>{isActive ? 'Edit' : 'Cancel'}</Button>
                {!isActive ? <Button color="success" type="submit">Save</Button> : ''}
            </Box>

        </Box>

    )
}

export default Form
