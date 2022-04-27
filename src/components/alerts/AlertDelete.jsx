import React from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function AlertDelete({confirm, text}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{alignSelf: 'center'}}>
            <Button onClick={handleClickOpen} color={'error'} variant='contained' startIcon={<DeleteIcon />}>
                Удалить
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {text}
                </DialogTitle>
                <DialogActions>
                    <Button
                        color="error"
                        variant={'contained'}
                        onClick={confirm}
                    >
                        Удалить
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={handleClose}
                        autoFocus
                    >
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDelete;