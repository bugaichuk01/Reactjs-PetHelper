import React from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

function AlertDelete({confirm, text, icon, btnText}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{alignSelf: 'center'}}>
            <Button
                onClick={handleClickOpen}
                sx={{backgroundColor: '#e36f73'}}
                variant='contained'
                startIcon={icon}
                fullWidth
            >
                {btnText}
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