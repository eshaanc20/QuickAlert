import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Title extends Component {

    render() {
        return (
            <div style={
                {
                    width:'85%',
                    paddingTop: "5%",
                    marginLeft: "5%" 
                }
            }>
                <div style={{textAlign: "left"}}>
                    <Typography style={{ color: "white", marginLeft: "6%"}} 
                        variant="h1" component="h2" gutterBottom>
                        Quick Alert
                    </Typography>
                    <Typography style={{ color: "white", marginLeft: "8%" }}
                        variant="h4" component="h2" gutterBottom>
                        All for your safety.
                    </Typography>
                    <Typography style={{ color: "white", margin: "9%" }}
                        variant="h6" component="h2" gutterBottom>
                        A web application that ensures that emergency services near you know about all relevant information that
                        might concern you, all with one text message of your address. It helps hospitals know about their patients 
                        before they arrive to the hospital. 
                        <p><strong>After registering, send a text message at (365) 800-5631 containing address during an emergency
                            to send your information to nearest emergency service.</strong></p>
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Title;