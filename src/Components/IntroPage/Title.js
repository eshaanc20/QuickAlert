import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Title extends Component {

    render() {
        return (
            <div style={
                {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "15%",
                    width: "100%",
                }
            }>
                <Typography style={{color: "white"}} 
                    variant="h1" component="h2" gutterBottom>
                    Quick Alert!
                </Typography>
                <Typography variant="h1" component="h2" gutterBottom>
                    Text Field
                </Typography>
            </div>
        )
    }
}

export default Title;