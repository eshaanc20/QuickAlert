import React, { Component } from 'react';
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
                    autoHideDuration={1000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    onClose={() => this.setState({ open: false})}
                    message="Updating..." />
                <Snackbar />
            </div>
        )
    }
}

export default Message;