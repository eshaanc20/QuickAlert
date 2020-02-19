import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './Registration.css';
import LoginInfo from './LoginInfo';
import UserInfo from './UserInfo';
import Success from './Success';
import ServiceInfo from './ServiceInfo';
import axios from 'axios';
import { Typography } from '@material-ui/core';

export default class Registration extends React.Component {
    state = {
        name: null,
        email: null,
        password: null,
        phoneNumber: null,
        age: null,
        conditions: null,
        otherDetails: null,
        address: null,
        step: 0,
        account: 'User',
        hospital: false,
        police: false,
        fireDepartment: false,
        errors: [],
    }

    checked = (event, stateName) => {
        this.setState({
            [stateName]: event.target.value,
        })
    }

    update = (event, value) => {
        this.setState({
            [value]: event.target.value
        })
    }

    submit = (event) => {
        if (!this.state.phoneNumber) {
            this.setState({
                errors: ['phoneNumber']
            })
        } else {
            if (this.state.account === 'User') {
                axios.post('https://quick-alert.herokuapp.com/newUser', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber,
                    age: this.state.age,
                    medicalConditions: this.state.conditions,
                    otherDetails: this.state.otherDetails
                })
                    .then(res => {
                            this.setState(state => ({
                            step: state.step + 1
                        }))
                    })
            } else if (this.state.account === 'Service') {
                var type = null;
                if (this.state.hospital) {type = 'Hospital'};
                if (this.state.police) {type = 'Police Station'};
                if (this.state.fireDepartment) {type = 'Fire Department'};
                axios.post('https://quick-alert.herokuapp.com/newService', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    type: type,
                    address: this.state.address
                })
                    .then(res => {
                            this.setState(state => ({
                            step: state.step + 1
                        }))
                    })
            }
        }
    }

    next = () => {
        if (this.state.name && this.state.email && this.state.password) {
            this.setState(state => ({
                step: state.step + 1
            }))
        } 
        var newErrors = [];
        if (!this.state.name) {
            newErrors.push('name');
        }
        if (!this.state.email) {
            newErrors.push('email');
        }
        if (!this.state.password) {
            newErrors.push('password');
        }
        if (newErrors.length > 0) {
            this.setState({
                errors: newErrors
            })
        }
    }

    render() {
        return (
            <div className='registration'>
                <Typography variant="h5" style={{textAlign: 'center'}}>
                    Registration
                </Typography>
                <Stepper activeStep = {this.state.step}>
                    <Step>
                        <StepLabel>Login Info</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>User Info</StepLabel>
                    </Step>
                </Stepper>
                {this.state.step === 0? <LoginInfo next={this.next} update={this.update} checked={this.checked} errors={this.state.errors} value={this.state.account}/>: null}
                {this.state.step === 1 && this.state.account === 'User'? <UserInfo submit={this.submit} update={this.update} checked={this.checked} errors={this.state.errors}/>: null}
                {this.state.step === 1 && this.state.account === 'Service'? <ServiceInfo submit={this.submit} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 2? <Success/>: null}
            </div>
        )
    }
}