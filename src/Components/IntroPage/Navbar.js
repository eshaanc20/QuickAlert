import React, { Component } from 'react';
import Login from './Login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" style ={{backgroundColor: "white"}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                            <Typography variant="h6" style={{ color: "#ff5050"}}>
                                Quick Alert
                            </Typography>
                            <Login />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;