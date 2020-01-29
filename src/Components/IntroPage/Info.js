import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Info extends React.Component {
    state = {
        open: false
    }
    render() {
        return(
            <div>
                <Dialog open={this.state.open}>
                    <DialogContent>
                        <Typography variant="h5">How to use Quick Alert</Typography>
                        <Typography variant="h6">User</Typography>
                        <DialogContentText>
                            <ol>
                                <li>Register as user using the registration form</li>
                                <li>Send message at (365) 800-5631 with current address</li>
                                <li>All of your infomation will be sent to nearest emergency service</li>
                                <li>The emergency service's dashboard on the web application will update and show the user's infomation</li>
                            </ol>
                        </DialogContentText>
                        <Typography variant="h6">Emergency Service</Typography>
                        <DialogContentText>
                            <ol>
                                <li>Register as emergency service using the registration form</li>
                                <li>Log in to view your dashboard</li>
                                <li>
                                    When users near this emergency service request help or want to share their information, 
                                    the dashboard will update with user's information
                                </li>
                            </ol>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({open: false})}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button onClick={() => this.setState({open: true})} variant="contained" color='primary'>
                    Usage
                </Button>
            </div>
        )
    }
}