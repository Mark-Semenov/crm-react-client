
'use client';

import { Box, Paper } from "@mui/material"
import { Button, Divider, InputBase } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";


export const SearchPanel = ({ link }) => {

  const route = useRouter()

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mb: 2
    }}>
      <Divider />
      <Button
        sx={{
          height: '60px',
          mr: 2,
          width: '150px'
        }}
        onClick={() => route.push(link)}
        variant="outlined">New</Button>
      <Paper
        component="form"
        elevation={0}
        sx={{
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          width: '100%',
          border: '1px solid lightgray'

        }}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search ..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}


export default SearchPanel