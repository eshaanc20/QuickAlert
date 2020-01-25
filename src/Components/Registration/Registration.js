import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import './Registration.css';
import LoginInfo from './LoginInfo'
import UserInfo from './LoginInfo'

export default class Registration extends React.Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        phoneNumber: null,
        age: null,
        conditions: null,
        otherDetails: null,
        address: null,
        step: 0
    }

    next = () => {
        this.setState(state => ({
            step: state.step + 1
        }))
    }

    render() {
        return (
            <div className='registration'>
                <h2 style={{textAlign: 'center'}}>Registration</h2>
                <Stepper activeStep = {this.state.step}>
                    <Step>
                        <StepLabel>Login Info</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>User Info</StepLabel>
                    </Step>
                </Stepper>
                {this.state.step === 0? 
                    <LoginInfo/>:<UserInfo/>
                }
            </div>
        )
    }
}