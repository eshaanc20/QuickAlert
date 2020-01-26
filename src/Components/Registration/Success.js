import React from 'react';
import './Registration.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Typography } from '@material-ui/core';

export default class Success extends React.Component {
    render() {
        return (
            <div className='success'>
                <CheckCircleIcon style={{color: '#00cc00', fontSize:'100px', marginLeft: '12%'}}/>
                <Typography variant='h4' style={{color: 'black'}}>Registered</Typography>
            </div>
        )
    }
}
