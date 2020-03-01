import React, {Component} from 'react';
import DashBar from '../Dashboard/Dashbar';
import ModifyLogin from './ModifyLogin';
import ModifyInfo from './ModifyInfo';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class UserPage extends Component {
    render() {
        return (
            <div>
                <DashBar logoutHandler={this.props.logoutHandler}/>
                <div style={{width: '90%', margin: 'auto', textAlign: 'center', marginTop: '40px'}}>
                    <Typography variant="h4">{this.props.info.name}</Typography>
                    <Typography variant="h6" style={{opacity: '0.5'}}>View/Update Information</Typography>
                    <div 
                        style={{
                            display: 'flex', 
                            width: '90%',
                            maxWidth: '1000px',
                            margin: 'auto',
                            marginTop: '20px',
                            justifyContent: 'space-evenly'
                        }}>
                        <ModifyLogin info={this.props.info}/>
                        <div style={{textAlign: 'right', width: '450px'}}>
                            <ModifyInfo info={this.props.info}/>
                            <Button
                                color='primary'
                                variant='contained'
                            >Update</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;