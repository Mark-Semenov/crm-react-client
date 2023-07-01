'use client';

import { Button, Box, TextField } from "@mui/material"
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveAsIcon from '@mui/icons-material/SaveAs';

export const Company = ({ company, accessToken }) => {


  const [isActive, setIsActive] = useState(true)
  const [dto, setDto] = useState(company)
  const [updatedEmails, setUpdatedEmails] = useState([dto.emails])




  async function handleSubmit() {

    try {

      const resp = await fetch('http://localhost:80/company-service/api/v1/company/update', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: dto
      })

    } catch (error) {
      console.log(error)
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

      <Box sx={{ p: 1, mb: 2 }}>
        {isActive ? <Button startIcon={<EditIcon />} type="button" onClick={() => (setIsActive(() => !isActive))}>Edit</Button> :
          <Button startIcon={<CloseIcon />} onClick={() => setIsActive(() => !isActive)}>Cancel</Button>}
        {!isActive ? <Button startIcon={<SaveAsIcon />} color="success" type="submit">Save</Button> : ''}
        <Button startIcon={<DeleteIcon />} color="secondary">Delete</Button>
      </Box>


      <TextField
        variant="outlined"
        sx={{ pb: 4 }}
        label="Title"
        defaultValue={dto.title}
        onChange={(e) => { setDto({ ...dto, title: e.target.value }) }}
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

      {dto?.emails.map((item) => 

            <TextField
              fullWidth
              key={item}
              variant="outlined"
              sx={{ pb: 4 }}
              label="Email"
              defaultValue={item}
              onChange={e => {
                setDto({ ...dto, emails: (prev) => [...prev, { item: e.target.value }] })
              }}
              disabled={isActive}

            />
        
      )}

      {dto?.phones.map((phone) => 
         <TextField
          key={phone}
          variant="outlined"
          sx={{ pb: 4 }}
          label="Phone"
          defaultValue={phone}
          onChange={(e) => { setDto({ ...dto, phones: [e.target.value] }) }}
          disabled={isActive}
          required
        />
      )}


    </Box>


  )
}


export default Company