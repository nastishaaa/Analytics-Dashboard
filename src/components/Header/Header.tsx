import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";

interface HeaderProps {
    handleClick: () => void;
    isOpen: boolean;
}

export default function Header({handleClick, isOpen}: HeaderProps) {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>

                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ fontWeight: 700, textDecoration: 'none', color: 'primary.main', letterSpacing: '-0.5px' }}
                    >
                        Analytics Dashboard
                    </Typography>

                    <IconButton aria-label="open drawer" size="large" onClick={handleClick}>
                        {isOpen ? <CloseIcon fontSize="inherit" /> : <DashboardIcon fontSize="inherit" />}
                        
                    </IconButton>

                </Toolbar>
            </Container>
        </AppBar>
    );
}