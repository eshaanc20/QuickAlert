import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component {

    state = {
        open: false
    }

    

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };


    render() {
        return ( 
            <div>
                <Button variant = "contained"
                style = {
                    {
                        backgroundColor: "white",
                        color: "#ff5050"
                    }
                }
                onClick = {
                    this.handleClickOpen
                } >
                    Login 
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please enter your email and password.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Login;