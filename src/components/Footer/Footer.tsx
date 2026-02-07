import { Box, Typography, Container, Stack } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(8px)',
                borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CopyrightIcon sx={{ fontSize: 16 }} /> {new Date().getFullYear()} Analytics Dashboard
                    </Typography>

                </Stack>
            </Container>
        </Box>
    );
}