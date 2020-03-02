import React, {Component} from 'react';
import DashBar from '../Dashboard/Dashbar';
import ModifyLogin from './ModifyLogin';
import ModifyInfo from './ModifyInfo';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import Message from '../Dashboard/Message';

class UserPage extends Component {
    state = {
        name: this.props.info.name,
        phoneNumber: this.props.info.phoneNumber,
        email: this.props.info.email,
        password: this.props.info.password,
        age: this.props.info.age,
        medicalConditions: this.props.info.medicalConditions,
        otherDetails: this.props.info.otherDetails,
        showMessage: false,
        message: null,
    }

    update = () => {
        axios.post('https://quick-alert.herokuapp.com/update', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            age: this.state.age,
            medicalConditions: this.state.medicalConditions,
            otherDetails: this.state.otherDetails
        })
            .then(res => {
                this.setState({
                    showMessage: true,
                    message: 'Updated'
                })
            })
    }

    change = (event, name) => {
        this.setState({
            [name]: event.target.value
        })
    }

    closeMessage = () => {
        this.setState({
            showMessage: false
        })
    }

    render() {
        return (
            <div>
                <div style={{ width: "100vw", height: "200vh", backgroundColor: "#ff5050", paddingBottom: '40px', color: 'white'}}>
                    <DashBar logoutHandler={this.props.logoutHandler}/>
                    <div style={{width: '90%', margin: 'auto', textAlign: 'center', marginTop: '40px'}}>
                        <Typography variant="h4">{this.props.info.name}</Typography>
                        <Typography variant="h6" style={{opacity: '0.8'}}>View/Update Information</Typography>
                        <div 
                            style={{
                                display: 'flex', 
                                width: '90%',
                                maxWidth: '1000px',
                                margin: 'auto',
                                marginTop: '20px',
                                justifyContent: 'space-evenly',
                                flexWrap: 'wrap'
                            }}>
                            <ModifyLogin info={this.props.info} change={this.change}/>
                            <div style={{textAlign: 'right', width: '450px'}}>
                                <ModifyInfo info={this.props.info} change={this.change}/>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    onClick={this.update}
                                >Update</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Message message={this.state.message} open={this.state.showMessage} close={this.closeMessage} anchor='center'/>
            </div>
        )
    }
}

export default UserPage;