'use client'
import { Box, Container, Paper } from "@mui/material"
import { Button } from "@mui/material"
import { Divider } from "@mui/material"
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


export const Panel = () => {

  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between',
      mb: 2
    }}>
      <Divider />
      <Button sx={{ height: '60px', mr: 2, width: '150px' }} variant="outlined">New</Button>
      <Paper
        component="form"
        elevation={1}
        sx={{
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          width: '100%',

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


export default Panel