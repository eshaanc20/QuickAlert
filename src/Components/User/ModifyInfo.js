import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Information extends Component {
    render() {
        return (
            <div className='info-container'>
                <TextField
                    label='Medical Conditions'
                    defaultValue={this.props.info.medicalConditions}
                    variant='outlined'
                    multiline
                    rows='8'
                />
                <TextField
                    label='Other Details'
                    defaultValue={this.props.info.otherDetails}
                    variant='outlined'
                    multiline
                    rows='6'
                />
            </div>
        )
    }
}

export default Information;