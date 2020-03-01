import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './User.css';

class Information extends Component {
    render() {
        return (
            <div className='loginInfo-container'>
                <TextField
                    label='Name'
                    defaultValue={this.props.info.name}
                    variant='outlined'
                />
                <TextField
                    label='Phone Number'
                    defaultValue={this.props.info.phoneNumber}
                    variant='outlined'
                />
                <TextField
                    label='Email'
                    defaultValue={this.props.info.email}
                    variant='outlined'
                />
                <TextField
                    label='Password'
                    type='password'
                    defaultValue={this.props.info.password}
                    variant='outlined'
                />
                <TextField
                    label='Age'
                    defaultValue={this.props.info.age}
                    variant='outlined'
                />
            </div>
        )
    }
}

export default Information;