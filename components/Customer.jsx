'use client';

import {
    Button, Box, TextField, MenuItem,
    Link, Paper, Typography
} from "@mui/material"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { statuses } from "./crm/const/statusList";
import { types } from "./crm/const/typeList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const DeleteDialog = ({ open, handleClose, id, fullname, handleDelete }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure that you want to delete customer with"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography> {`ID: ${id}`}</Typography>
                    <Typography> {`Name: ${fullname}`}</Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}


export const Customer = ({ customer, companies }) => {


    const route = useRouter()
    const [isActive, setIsActive] = useState(true)
    const [dto, setDto] = useState(customer)
    const [open, setOpen] = useState(false);
    const [updatedEmails, setUpdatedEmails] = useState([dto.emails])

    const handleChange = (e) => {

        const value = e.target.value
        setDto({
            ...dto,
            [e.target.name]: value
        })
    }

    function handleClose() {
        setOpen(false)
    }

    const handleDelete = async () => {
        const resp = await fetch(`/api/customer/${dto.id}`, {
            method: 'DELETE'
        })

        setOpen(false)
        route.push("/crm/customers")
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const resp = await fetch('/api/customer/update/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        })
    }

    return (
        <Box>

            <DeleteDialog
                open={open}
                handleClose={handleClose}
                id={dto.id}
                fullname={dto.firstName + " " + dto.lastName}
                handleDelete={handleDelete} />

            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    p: 1
                }}
            >



                <Box sx={{ p: 1, mb: 2 }}>
                    {isActive ? <Button startIcon={<EditIcon />} type="button" onClick={() => (setIsActive(() => !isActive))}>Edit</Button> :
                        <Button startIcon={<CloseIcon />} onClick={() => setIsActive(() => !isActive)}>Cancel</Button>}
                    {!isActive ? <Button startIcon={<SaveAsIcon />} color="success" type="submit">Save</Button> : ''}
                    <Button onClick={() => { setOpen(() => !open) }} startIcon={<DeleteIcon />} color="secondary">Delete</Button>
                </Box>




                <TextField
                    variant="outlined"
                    sx={{ pb: 4 }}
                    name='firstName'
                    label='Firstname'
                    defaultValue={dto.firstName}
                    onChange={handleChange}
                    disabled={isActive}
                />

                <TextField
                    variant="outlined"
                    sx={{ pb: 4 }}
                    name="lastName"
                    label="Lastname"
                    defaultValue={dto.lastName}
                    onChange={handleChange}
                    disabled={isActive}
                />

                <TextField
                    variant="outlined"
                    sx={{ pb: 4 }}
                    name="patronumic"
                    label="Patronymic"
                    defaultValue={dto.patronymic != null ? dto.patronymic : ' '}
                    onChange={handleChange}
                    disabled={isActive}
                />

                <TextField
                    variant="outlined"
                    sx={{ pb: 4 }}
                    name="post"
                    label="Post"
                    defaultValue={dto.post}
                    onChange={handleChange}
                    disabled={isActive}
                />

                <TextField
                    select
                    variant="outlined"
                    sx={{ pb: 4 }}
                    name="type"
                    label="Type"
                    defaultValue={dto.type}
                    onChange={handleChange}
                    disabled={isActive}
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
                    sx={{ pb: 4 }}
                    name="status"
                    label="Status"
                    defaultValue={dto.status}
                    disabled={isActive}
                    onChange={handleChange}
                    required
                >
                    {statuses.map((status, index) =>
                        <MenuItem
                            key={index} value={status}>
                            {status}
                        </MenuItem>
                    )}

                </TextField>

                {dto?.emails.map((email) =>

                    <TextField
                        fullWidth
                        key={email}
                        variant="outlined"
                        sx={{ pb: 4 }}
                        name="emails"
                        label="Email"
                        defaultValue={email}
                        onChange={(e) => { setDto({ ...dto, email: [e.target.value] }) }}
                        disabled={isActive}
                    />

                )}


                {dto?.phones.map((phone) =>
                    <TextField
                        key={phone}
                        variant="outlined"
                        sx={{ pb: 4 }}
                        name="phones"
                        label="Phone"
                        defaultValue={phone}
                        onChange={(e) => setDto({ ...dto, phones: [e.target.value] })}
                        disabled={isActive}
                    />

                )}



                {dto?.companyDTO.map(company =>

                    !isActive ? <TextField
                        select
                        fullWidth
                        variant="outlined"
                        name="uniqueCompaniesId"
                        label="Company"
                        key={company.id}
                        defaultValue={company.id}
                        disabled={isActive}
                        onChange={e => setDto({ ...dto, uniqueCompaniesId: [e.target.value] })}

                    >
                        {companies.map((c) =>

                            <MenuItem
                                key={c.id}
                                value={c.id}>
                                {c.title}
                            </MenuItem>

                        )}
                    </TextField>
                        : <Box key={company.id}>
                            <Typography sx={{ mb: 2 }} variant="h6">Company</Typography>
                            <Link href={`/crm/companies/${company.id}`}>{company.title}
                            </Link>
                        </Box>
                )}


            </Box>

        </Box>


    )
}


export default Customer