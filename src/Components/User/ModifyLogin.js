import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './User.css';

class ModifyLogin extends Component {
    render() {
        return (
            <div className='loginInfo-container'>
                <TextField
                    label='Name'
                    defaultValue={this.props.info.name}
                    variant='outlined'
                    onChange={(event) => this.props.change(event, 'name')}
                />
                <TextField
                    label='Phone Number'
                    defaultValue={this.props.info.phoneNumber}
                    variant='outlined'
                    onChange={(event) => this.props.change(event, 'phoneNumber')}
                />
                <TextField
                    label='Email'
                    defaultValue={this.props.info.email}
                    variant='outlined'
                    onChange={(event) => this.props.change(event, 'email')}
                />
                <TextField
                    label='Password'
                    type='password'
                    variant='outlined'
                    onChange={(event) => this.props.change(event, 'password')}
                />
                <TextField
                    label='Age'
                    defaultValue={this.props.info.age}
                    variant='outlined'
                    onChange={(event) => this.props.change(event, 'age')}
                />
            </div>
        )
    }
}

export default ModifyLogin;