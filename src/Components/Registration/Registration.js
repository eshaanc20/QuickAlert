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

    submit = (event) => {
        if (this.state.user) {
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
        } else if (this.state.service) {
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

    next = () => {
        this.setState(state => ({
            step: state.step + 1
        }))
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
                {this.state.step === 0? <LoginInfo next={this.next} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 1 && this.state.user? <UserInfo submit={this.submit} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 1 && this.state.service? <ServiceInfo submit={this.submit} update={this.update} checked={this.checked}/>: null}
                {this.state.step === 2? <Success/>: null}
            </div>
        )
    }
}