import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Drawer() {
    return (
        <Box component="nav" sx={{ display: 'flex', gap: 2, flexDirection: 'column'}}>
            {['Overview', 'Reports', 'Users'].map((item) => (
                <Button
                    key={item}
                    component={NavLink}
                    to={`/${item.toLowerCase()}`}
                    sx={{
                        color: '#666',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&.active': { color: 'primary.main', backgroundColor: 'rgba(25, 118, 210, 0.08)' },
                        '&:hover': { color: 'primary.main' }
                    }}
                >
                    {item}
                </Button>
            ))}
        </Box>
    );
}