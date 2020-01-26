import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import './Registration.css';
import LoginInfo from './LoginInfo';
import UserInfo from './UserInfo';
import Success from './Success';
import ServiceInfo from './ServiceInfo';

export default class Registration extends React.Component {
    state = {
        name: null,
        email: null,
        password: null,
        phoneNumber: null,
        age: null,
        conditions: null,
        otherDetails: null,
        homeAddress: null,
        address: null,
        step: 0,
        user: false,
        service: false,
        hospital: false,
        police: false,
        fireDepartment: false
    }

    checked = (event, value) => {
        this.setState({
            [value]: event.target.checked
        })
    }

    update = (event, value) => {
        this.setState({
            [value]: event.target.value
        })
    }

    submit = (event, value) => {
        
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
                {this.state.step === 0? <LoginInfo next={this.next} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 1 && this.state.user? <UserInfo submit={this.submit} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 1 && this.state.service? <ServiceInfo submit={this.submit} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 2? <Success/>: null}
            </div>
        )
    }
}