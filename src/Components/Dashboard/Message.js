import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class Message extends Component {

    state = {
        open: true
    }


    render() {
        return (
            <div>
                <Snackbar
                    open={this.state.open}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={() => this.setState({ open: false })}
                    message="Updating for new people..." />
                <Snackbar />
            </div>
        )
    }
}

export default Message;