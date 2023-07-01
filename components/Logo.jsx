import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Logo = () => {
    return (
        <Box sx={{
            display: 'flex', 
            alignItems: 'center'
        }}>
            <AllInclusiveIcon />
            <Typography variant="h6" sx={{ ml: 1 }}>
                Customized CRM
            </Typography>
        </Box>
    )
}

export default Logo
