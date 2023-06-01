
'use client'
import {
    TextField, CardHeader, Card,
    CardContent, Typography, Tooltip,
    CardActions, Button, Box, Grid,
    Divider, MenuItem, Select
} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Link from "next/link";

const types = ['GREEN', 'BLACK', 'RED']

function Field({ name, value }) {

    const [field, setField] = useState(value)
    const [editable, setEditable] = useState()

    function upperWord(word){
        const letter = word.charAt(0)
        const cut = word.slice(1).toLowerCase()
        return letter.toUpperCase() + cut
    }


    function handleClick() {
        setEditable({
            editable: true
        })
    }

    function handleDoubleClick(e) {
        setField(e.target.value)
        setEditable(false)
    }

    function handelOnChange(e) {
        setField(e.target.value)
    }


    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="subtitle2" mr={1}>{upperWord(name)}</Typography>
            {
                !editable ? (
                    <Box sx={{ p: 1 }}>
                        <Tooltip arrow title="Click to edit">
                            <Typography
                                variant="h6"
                                onClick={handleClick}
                                gutterBottom>
                                {field}
                            </Typography>
                        </Tooltip>
                        <Divider light flexItem />
                    </Box>

                ) : (
                    <Tooltip arrow title="Double click to save">
                        {name != 'status' ? (
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                defaultValue={field}
                                onDoubleClick={handleDoubleClick}
                            />
                        ) : (<Select

                            fullWidth
                            required
                            id="outlined-required"
                            value={field}
                            onDoubleClick={() => setEditable(false)}
                            onChange={handelOnChange}>
                            {types.map((type, index) => (
                                <MenuItem key={index} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                        )
                        }
                    </Tooltip>
                )

            }

        </Box>
    )
}




export function DtoCard({ customer }) {

    const fullName = customer.firstName + " " + customer.lastName

    return (

        <>
            <Card sx={{ minWidth: 275, mb: 5 }}>
                <CardHeader
                    title={<Typography variant="h4">{fullName}</Typography>}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }>
                </CardHeader>


                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Box>
                                {Object.keys(customer).map((key, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                typeof customer[key] === "string" && key !== "id" ?
                                                    <Field
                                                        value={customer[key]}
                                                        name={key} />
                                                    : ('')
                                            }
                                        </div>
                                    );
                                })}
                            </Box>

                            <Box>
                                {customer.emails.map(email => {
                                    return (
                                        <Field
                                            key={email}
                                            name={"Email"}
                                            value={email} />
                                    )
                                })}
                                {customer.phones.map(phone => {
                                    return (
                                        <Field
                                            key={phone}
                                            name={"Phone"}
                                            value={phone} />
                                    )
                                })}
                            </Box>

                            <Box>
                                {customer.companyDTO.map(company => {
                                    return (
                                        <Box>Company:
                                            <Link href={`/crm/companies/${company.id}`}>
                                                <Typography key={company.id}>
                                                    {company.title}

                                                </Typography>

                                            </Link>
                                        </Box>
                                    )
                                })}

                            </Box>
                        </Grid>
                        <Divider light orientation="vertical" flexItem>

                        </Divider>
                        <Grid item xs>
                            <Typography>Deals</Typography>
                        </Grid>

                    </Grid>

                </CardContent>

                <CardActions>
                    <Button size="small">Save</Button>
                </CardActions>
            </Card>
        </>

    )
}

export default DtoCard