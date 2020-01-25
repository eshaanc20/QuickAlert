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
                    marginTop: "10%",
                    width: "100%",
                }
            }>
                <div style={{textAlign: "left"}}>
                    <Typography style={{ color: "white", marginLeft: "6%"}} 
                        variant="h1" component="h2" gutterBottom>
                        Quick Alert!
                    </Typography>
                    <Typography style={{ color: "white", marginLeft: "8%" }}
                        variant="h6" component="h2" gutterBottom>
                        For your safety.
                    </Typography>
                    <Typography style={{ color: "white", width: "50%", margin: "9%" }}
                        variant="h6" component="h2" gutterBottom>
                        A web application that ensures that emergency services knows about all relevant information that
                        might concern you, all with a single message.
                    </Typography>
                </div>
                <Typography variant="h1" component="h2" gutterBottom>
                    Text Field
                </Typography>
            </div>
        )
    }
}

export default Title;