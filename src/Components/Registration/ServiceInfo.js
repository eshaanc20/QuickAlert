import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Checkbox } from '@material-ui/core';
import './Registration.css';

export default class ServiceInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Checkbox checked={this.props.checkedService} onChange={(event) => this.props.checked(event, 'hospital')}/>
                        <p>Hospital</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Checkbox checked={this.props.checkedService} onChange={(event) => this.props.checked(event, 'police')}/>
                        <p>Police Station</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Checkbox checked={this.props.checkedService} onChange={(event) => this.props.checked(event, 'fireDepartment')}/>
                        <p>Fire Department</p>
                    </div>
                </div>
                <TextField
                    variant='outlined'
                    label='Address'
                    multiline
                    rows= '4'
                    onChange={event => this.props.update(event, 'address')}
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
