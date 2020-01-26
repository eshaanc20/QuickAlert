import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Registration.css';

export default class UserInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <TextField label='Phone Number' variant="outlined" style={{width: '180px'}} onChange={event => this.props.update(event, 'phoneNumber')}/>
                    <TextField label='Age' variant="outlined" style={{width: '150px'}} onChange={event => this.props.update(event, 'age')}/>
                </div>
                <TextField
                    variant='outlined'
                    label='Health Conditions'
                    multiline
                    rows= '6'
                    onChange={event => this.props.update(event, 'conditions')}
                />
                <TextField
                    variant='outlined'
                    label='Other Details'
                    multiline
                    rows= '2'
                    onChange={event => this.props.update(event, 'otherDetails')}
                />
                <Button style={{
                    width: '100px', 
                    marginLeft: '36%', 
                    backgroundColor: '#ff5050',
                    color: 'white'
                }}
                variant='contained'
                onClick={this.props.submit}
                >Submit</Button>
            </div>
        )
    }
}
