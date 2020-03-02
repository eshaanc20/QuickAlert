import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class Message extends PureComponent {
    render() { 
        return (
            <div>
                <Snackbar
                    open={this.props.open}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: this.props.anchor }}
                    onClose={this.props.close}
                    message={this.props.message} />
                <Snackbar/>
            </div>
        )
    }
}

export default Message;