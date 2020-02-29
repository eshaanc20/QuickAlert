import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Information extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '40%', maxWidth: '400px', margin: 'auto'}}>
                <TextField
                    label='Name'
                    defaultValue={this.props.info.name}
                />
                <TextField
                    label='Email'
                    defaultValue={this.props.info.email}
                />
                <TextField
                    label='Password'
                    type='password'
                    defaultValue={this.props.info.password}
                />
            </div>
        )
    }
}

export default Information;