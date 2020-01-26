import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";

class Login extends Component {

    state = {
        email: null,
        password: null,
        open: false,
        user: null,
        service: null
    }

    submit = () => {
        axios.post('https://quick-alert.herokuapp.com/authentication', {
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            type: this.state.user ? "user" : "service"
        })
            .then(res => {
                if(res.data[0] === true) {
                    this.props.loginHandler(res.data[1], res.data[2])
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

    render() {
        return ( 
            <div>
                <Button variant="contained" style={{backgroundColor: "#ff5050", color: "white"}} onClick = {this.handleClickOpen}>
                    Login 
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div style={{padding: '20px'}}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
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
                            <FormGroup row style={{marginTop: "5%", justifyContent: "space-evenly"}}>
                                <FormControlLabel 
                                    control={
                                        <Checkbox
                                            checked={this.checked}
                                            onChange={(event) => this.handleChange(event, "user")}
                                            value="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    }
                                    label="User"
                                >
                                </FormControlLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.checked}
                                            onChange={(event) => this.handleChange(event, "service")}
                                            value="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    }
                                    label="Emergency Services"
                                >
                                </FormControlLabel>
                            </FormGroup>
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
            </div>
        )
    }
}

export default Login;