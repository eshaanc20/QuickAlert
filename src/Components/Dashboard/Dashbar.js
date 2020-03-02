import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class Dashbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "white" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <Typography variant="h6" style={{ color: "#ff5050" }}>
                                Quick Alert
                            </Typography>
                            <Button 
                                onClick={this.props.logoutHandler} 
                                style={{backgroundColor: "#ff5050", color: "white"}} 
                                variant="contained"
                            >Logout</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Dashbar;