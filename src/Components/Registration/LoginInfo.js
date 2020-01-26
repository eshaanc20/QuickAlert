import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Registration.css';
import { Checkbox } from '@material-ui/core';

export default class LoginInfo extends React.Component {

    render() {
        return (
            <div className='loginInfo'>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Checkbox checked={this.props.checkedUser} onChange={(event) => this.props.checked(event, 'user')}/>
                        <p>User</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Checkbox checked={this.props.checkedService} onChange={(event) => this.props.checked(event, 'service')}/>
                        <p>Service</p>
                    </div>
                </div>
                <TextField label='Name/Organization' variant="outlined" onChange={event => this.props.update(event, 'name')}/>
                <TextField label='Email' variant="outlined" onChange={event => this.props.update(event, 'email')}/>
                <TextField label='Password' type='password' variant="outlined" onChange={event => this.props.update(event, 'password')}/>
                <Button style={{
                    width: '100px', 
                    marginLeft: '36%', 
                    backgroundColor: '#ff5050',
                    color: 'white'
                }}
                variant='contained'
                onClick={this.props.next}
                >Next</Button>
            </div>
        )
    }
}
