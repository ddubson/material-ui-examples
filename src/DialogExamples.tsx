import React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Divider,
  TextField
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export const DialogExamples: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <div>
    <Divider style={{paddingBottom: '15px'}}/>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Example form dialog
    </Button>
    <p>Contains an inline icon in the title</p>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle>
        <Typography variant="h6" component="h6" style={{display: 'flex', alignItems: 'center'}}>
          <EditIcon style={{paddingRight: '5px' }}/>
          Subscribe
        </Typography>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
    <Divider />
  </div>
}
