import React, {useEffect, useState} from 'react';
import adminService from "../../_services/admin.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Container} from "@mui/material";
import {Button} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AlertDelete from "../../components/alerts/AlertDelete";
import GoBack from "../../components/button/go-back/GoBack";

function AdminPanel() {
    const [users, setUsers] = useState([]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const columns = [
        {id: 'id', label: 'ID', minWidth: 70},
        {id: 'name', label: 'Name', minWidth: 70},
        {id: 'username', label: 'Username', minWidth: 70},
        {id: 'email', label: 'Email', minWidth: 70},
        {id: 'mobileNumber', label: 'Телефон', minWidth: 70},
        {id: 'role', label: 'Роль', minWidth: 70},
        {id: 'status', label: 'Статус', minWidth: 70},
        {id: 'btn', label: '', minWidth: 70},
    ]

    useEffect(() => {
        adminService.getAllUsers()
            .then(r => setUsers(r.data))
        console.log('updated')
    }, [users.length])

    const onDelete = (id) => {
        adminService.deleteUser(id);
    }

    return (
        <div>
            <Container>
                <GoBack />
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                        {
                                                            column.id === 'btn'
                                                            && (
                                                                <React.Fragment>
                                                           {/*         <AlertDelete
                                                                        icon={<DeleteIcon />}
                                                                        confirm={() => onDelete(row.id)}
                                                                        text={`Удалить ${row.username}?`}
                                                                    />*/}
                                                                    <Button
                                                                        variant={'contained'}
                                                                        color={'secondary'}
                                                                        onClick={() => onDelete(row.id)}
                                                                    >
                                                                        <DeleteIcon />
                                                                    </Button>

                                                                    <Button
                                                                        style={{marginLeft: '5px'}}
                                                                        variant={'contained'}
                                                                        color={'primary'}
                                                                        onClick={() => console.log(row)}
                                                                    >
                                                                        <EditIcon />
                                                                    </Button>
                                                                </React.Fragment>
                                                            )
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        </div>
    );
}

export default AdminPanel;