import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress color="primary" size={60} thickness={4} />
        </Box>
    );
}