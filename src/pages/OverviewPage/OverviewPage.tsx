import { Box, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 400 }, { name: 'Tue', uv: 300 }, { name: 'Wed', uv: 600 },
  { name: 'Th', uv: 800 }, { name: 'Fr', uv: 500 }, { name: 'Sat', uv: 900 },
];

export default function OverviewPage() {
    return (
        <Paper sx={{ p: 3, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Activity</Typography>
            <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#1976d2" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
}