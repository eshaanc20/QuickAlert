import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Registration.css';

export default class LoginInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <TextField label='First Name' variant="outlined"/>
                <TextField label='Last Name' variant="outlined"/>
                <TextField label='Email' variant="outlined"/>
                <TextField label='Password' variant="outlined"/>
                <Button style={{
                    width: '100px', 
                    marginLeft: '36%', 
                    backgroundColor: '#ff5050',
                    color: 'white'
                }}
                variant='contained'
                >Next</Button>
            </div>
        )
    }
}
