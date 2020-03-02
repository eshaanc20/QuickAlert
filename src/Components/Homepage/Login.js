import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Typography, DialogTitle } from '@material-ui/core';

class Login extends Component {

    state = {
        email: '',
        password: '',
        open: false,
        account: null,
        error: false
    }

    submit = () => {
        axios.post('https://quick-alert.herokuapp.com/authentication', {
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            account: this.state.account
        })
            .then(res => {
                if(res.data.authentication === true) {
                    this.props.loginHandler(res.data.information, this.state.account);
                } else {
                    this.setState({error: true})
                }
            })
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

    emailUpdate = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordUpdate = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleChange = (event,value) => {
        this.setState({
            [value]: event.target.checked
        })
    };

    handleChange = (event) => {
        this.setState({
            account: event.target.value
        })
    };

    render() {
        return ( 
            <div>
                <Button variant="contained" style={{backgroundColor: "#ff5050", color: "white"}} onClick = {this.handleClickOpen}>
                    Login 
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div style={{padding: '20px'}}>
                        <DialogContent>
                            <Typography variant="h5" style={{marginBottom:'5%'}}>Login</Typography>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email"
                                type="email"
                                onChange={event => this.emailUpdate(event)}
                                style={{width: '340px'}}
                            /><br></br>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Password"
                                type="password"
                                onChange={event => this.passwordUpdate(event)}
                                style={{width: '340px', marginTop: '20px'}}
                            />
                            <RadioGroup value={this.props.value} row style={{justifyContent: 'space-evenly', marginTop:'10px'}} onChange={this.handleChange}>
                                <FormControlLabel
                                    value="user"
                                    control={<Radio color="secondary" />}
                                    label="User"
                                    labelPlacement="right"
                                />
                                <FormControlLabel
                                    value="service"
                                    control={<Radio color="secondary" />}
                                    label="Emergency Service"
                                    labelPlacement="right"
                                />
                            </RadioGroup>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.submit} color="primary">
                                Login
                            </Button>
                        </DialogActions>
                    </div>
                </Dialog>
                <Dialog open={this.state.error}>
                    <DialogTitle>Login Error</DialogTitle>
                    <DialogContent>
                        Email or password is incorrect.
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({error: false})}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Login;