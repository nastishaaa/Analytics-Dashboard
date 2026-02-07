import { List, ListItem, ListItemIcon, ListItemText, Button, Typography, Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';

export default function ReportsPage() {
    const reports = ['January Report.pdf', 'Analytics_quarter_1.pdf', 'Users.csv'];

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>Reports</Typography>
            <List>
                {reports.map((report) => (
                    <ListItem
                        key={report}
                        secondaryAction={
                            <Button startIcon={<DownloadIcon />}>Download</Button>
                        }
                        sx={{ borderBottom: '1px solid #eee' }}
                    >
                        <ListItemIcon><PictureAsPdfIcon color="error" /></ListItemIcon>
                        <ListItemText primary={report} secondary="Created: 2 hours ago" />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}