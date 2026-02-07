import { Grid, Typography, Box, Card, CardContent } from '@mui/material';

export default function HomePage() {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Welcome to Analytics Dashboard! 👋</Typography>
            <Grid container spacing={3}>
                {[
                    { title: 'Sales', value: '$24,500', color: '#4caf50' },
                    { title: 'New users', value: '1,240', color: '#2196f3' },
                    { title: 'Activity', value: '432', color: '#ff9800' }
                ].map((item) => (
                    <Grid item xs={12} sm={4} key={item.title}>
                        <Card sx={{ borderLeft: `6px solid ${item.color}`, boxShadow: 3 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>{item.title}</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{item.value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}