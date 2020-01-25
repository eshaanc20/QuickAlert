import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Registration.css';

export default class UserInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <TextField label='Phone Number' variant="outlined"/>
                <TextField label='Age' variant="outlined"/>
                <TextField
                    variant='outlined'
                    label='Health Conditions'
                    multiline
                    rows= '4'
                />
                <TextField
                    variant='outlined'
                    label='Other Details'
                    multiline
                    rows= '4'
                />
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
