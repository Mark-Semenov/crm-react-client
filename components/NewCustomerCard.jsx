'use client';

import {useRouter} from "next/navigation";
import {useState} from "react";
import {Button, Box, TextField, MenuItem, Typography} from "@mui/material"
import {statuses} from "@components/crm/const/statusList";
import {types} from "@components/crm/const/typeList";

export default function NewCustomerCard({companies}) {

    const data = {
        firstName: '',
        lastName: '',
        type: '',
        status: '',
        patronymic: '',
        post: '',
        emails: [],
        phones: [],
        uniqueCompaniesId: []
    }


    const route = useRouter()
    const [dto, setDto] = useState(data)


    async function handleSubmit() {

        const resp = await fetch('/api/customer', {
            method: 'POST',
            body: JSON.stringify(dto)
        })

        setDto(data)
        route.push("/crm/customers")

    }

    return (

        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                p: 1,
                mb: 6
            }}>


            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 4}}>
                <Typography variant="h6">Add Customer</Typography>
                <Button color="success" type="submit">Save</Button>
            </Box>

            <TextField
                variant="outlined"
                sx={{pb: 4}}
                label="Firstname"
                onChange={(e) => {
                    setDto({...dto, firstName: e.target.value})
                }}
                required
            />
            <TextField
                variant="outlined"
                sx={{pb: 4}}
                label="Lastname"
                onChange={(e) => {
                    setDto({...dto, lastName: e.target.value})
                }}
            />
            <TextField
                variant="outlined"
                sx={{pb: 4}}
                label="Patronymic"
                onChange={(e) => {
                    setDto({...dto, patronymic: e.target.value})
                }}
            />
            <TextField
                variant="outlined"
                sx={{pb: 4}}
                label="Post"
                onChange={(e) => {
                    setDto({...dto, post: e.target.value})
                }}
            />
            <TextField
                select
                variant="outlined"
                sx={{pb: 4}}
                label="Type"
                defaultValue=""
                onChange={(e) => {
                    setDto({...dto, type: e.target.value})
                }}
                required
            >
                {types.map((type, index) => (
                    <MenuItem
                        key={index} value={type}>
                        {type}
                    </MenuItem>
                ))}


            </TextField>
            <TextField
                select
                variant="outlined"
                sx={{pb: 4}}
                label="Status"
                defaultValue=""
                onChange={(e) => {
                    setDto({...dto, status: e.target.value})
                }}
                required
            >
                {statuses.map((status, index) => (
                    <MenuItem
                        key={index} value={status}>
                        {status}
                    </MenuItem>
                ))}

            </TextField>

            <TextField
                fullWidth
                variant="outlined"
                sx={{pb: 4}}
                label="Email"
                onChange={(e) => {
                    setDto({...dto, emails: [e.target.value]})
                }}
            />

            <TextField
                variant="outlined"
                sx={{pb: 4}}
                label="Phone"
                onChange={(e) => {
                    setDto({...dto, phones: [e.target.value]})
                }}
            />


                if (companies != null){
                companies.map(company => (
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
                        name="uniqueCompaniesId"
                        label="Company"
                        key={company.id}
                        defaultValue=""
                        onChange={e => setDto({...dto, uniqueCompaniesId: [e.target.value]})}
                    >

                        <MenuItem
                            key={company.id}
                            value={company.id}>
                            {company.title}
                        </MenuItem>

                    </TextField>
                ))}


        </Box>


    )
}