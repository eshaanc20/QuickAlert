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
                <Button variant="contained" style={{backgroundColor: "#ff5050", color: "white"}} onClick = {this.handleClickOpen}>
                    Login 
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please enter your email address and password to continue.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
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
                        Login!
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Login;