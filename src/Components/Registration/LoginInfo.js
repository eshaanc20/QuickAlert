import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Registration.css';
import { Checkbox } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class LoginInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <RadioGroup value={this.props.value} row style={{justifyContent: 'space-evenly'}} onChange={(event) => this.props.checked(event, "account")}>
                    <FormControlLabel
                        value="User"
                        control={<Radio color="secondary" />}
                        label="User"
                        labelPlacement="right"
                    />
                    <FormControlLabel
                        value="Service"
                        control={<Radio color="secondary" />}
                        label="Emergency Service"
                        labelPlacement="right"
                    />
                </RadioGroup>
                <TextField 
                    label='Name/Organization' 
                    variant="outlined" 
                    onChange={event => this.props.update(event, 'name')} 
                    error={this.props.errors.includes('name')}/>
                <TextField 
                    label='Email' 
                    variant="outlined" 
                    onChange={event => this.props.update(event, 'email')}
                    error={this.props.errors.includes('email')}/>
                <TextField 
                    label='Password' 
                    type='password' 
                    variant="outlined" 
                    onChange={event => this.props.update(event, 'password')}
                    error={this.props.errors.includes('password')}/>
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
