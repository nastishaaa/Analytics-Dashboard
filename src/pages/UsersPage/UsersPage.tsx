import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Chip, Paper } from '@mui/material';

const users = [
  { id: 1, name: 'Alex K.', email: 'alex@test.com', status: 'Active' },
  { id: 2, name: 'Mariia L.', email: 'maria@test.com', status: 'Pending' },
  { id: 3, name: 'Ivan D.', email: 'ivan@test.com', status: 'Active' },
];

export default function UsersPage() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id} hover>
                            <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>{user.name[0]}</Avatar>
                                {user.name}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Chip label={user.status} color={user.status === 'Active' ? 'success' : 'warning'} size="small" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}