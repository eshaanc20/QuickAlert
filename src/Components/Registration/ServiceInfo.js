import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Checkbox } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Registration.css';

export default class ServiceInfo extends React.Component {
    render() {
        return (
            <div className='loginInfo'>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <RadioGroup value={this.props.value} style={{justifyContent: 'space-evenly'}} onChange={(event) => this.props.checked(event, "type")}>
                        <FormControlLabel
                            value="Hospital"
                            control={<Radio color="secondary" />}
                            label="Hospital"
                            labelPlacement="right"
                        />
                        <FormControlLabel
                            value="Police Station"
                            control={<Radio color="secondary" />}
                            label="Police Station"
                            labelPlacement="right"
                        />
                        <FormControlLabel
                            value="Fire Department"
                            control={<Radio color="secondary" />}
                            label="Fire Department"
                            labelPlacement="right"
                        />
                    </RadioGroup>
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
