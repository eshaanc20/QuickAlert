import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Information extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '40%', maxWidth: '400px', margin: 'auto'}}>
                <TextField
                    label='Phone Number'
                    defaultValue={this.props.info.phoneNumber}
                />
                <TextField
                    label='Age'
                    defaultValue={this.props.info.age}
                />
                <TextField
                    label='Medical Conditions'
                    defaultValue={this.props.info.medicalConditions}
                />
                <TextField
                    label='Other Details'
                    defaultValue={this.props.info.otherDetails}
                />
            </div>
        )
    }
}

export default Information;