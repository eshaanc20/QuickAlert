import React, { Component } from 'react';
import Dashbar from './Dashbar';
import Cards from './Cards';
import Clock from './Clock';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Message from './Message';

class Dashboard extends Component {
    state = {
        alerts: null
    }
    
    componentDidMount() {
        axios.post('https://quick-alert.herokuapp.com/respond', {
            name: this.props.user
        })
            .then(res => {
                this.setState({
                    alerts: res.data
                })
            })
        setInterval(() => {
            axios.post('https://quick-alert.herokuapp.com/respond', {
                name: this.props.user
            })
                .then(res => {
                    this.setState({
                        alerts: res.data
                    })
                })
        }, 3000);
    }

    render() {
        return (
            <div style={{ width: "100vw", height: "200vh", backgroundColor: "#ff5050", paddingBottom: '40px'}}>
                <Dashbar logoutHandler={this.props.logoutHandler} />
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: '85%', margin: 'auto'}}>
                    <div style={{width:'17%'}}></div>
                    <div>
                        <Typography style={{ color: "white", display: "flex", justifyContent: "space-evenly", marginTop: "8%" }} variant="h3">
                            {this.props.user}
                        </Typography>
                        <Typography style={{ color: "white", display: "flex", justifyContent: "space-evenly" }} variant="h5">
                            {this.props.type}
                        </Typography>
                    </div>
                    <div style={{fontSize: "3rem", paddingTop: '2.5%', width: '200px'}}>
                        <Clock />
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: 'space-evenly', paddingTop: "3%"}} variant="h3">
                    {this.state.alerts ? this.state.alerts.map(alert => {
                        if (!alert.responded) {
                            return <Cards
                                name={alert.name}
                                address={alert.currentLocation}
                                serviceName={alert.serviceName}
                                phoneNumber={alert.phoneNumber}
                                age={alert.age}
                                medicalConditions={alert.medicalConditions}
                                otherDetails={alert.otherDetails}
                                time={alert.time}
                            />
                        } else {
                            return null
                        }
                    }) : null}
                </div>
                <Message />
                <hr style={{color: 'white'}}></hr>
                <div style={{paddingTop: '1%'}}>
                    <Typography style={{ color: "white", display: "flex", justifyContent: "space-evenly"}} variant="h5">
                        Responded
                    </Typography>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: '1%'}} variant="h3">
                        {this.state.alerts ? this.state.alerts.map(alert => {
                            if (alert.responded) {
                                return <Cards
                                    name={alert.name}
                                    address={alert.currentLocation}
                                    serviceName={alert.serviceName}
                                    phoneNumber={alert.phoneNumber}
                                    age={alert.age}
                                    medicalConditions={alert.medicalConditions}
                                    otherDetails={alert.otherDetails}
                                    time={alert.time}
                                    responded={true}
                                />
                            } else {
                                return null
                            }
                        }) : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;