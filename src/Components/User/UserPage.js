import React, {Component} from 'react';
import DashBar from '../Dashboard/Dashbar';
import ModifyLogin from './ModifyLogin';
import ModifyInfo from './ModifyInfo';

class UserPage extends Component {
    render() {
        return (
            <div>
                <DashBar logoutHandler={this.props.logoutHandler}/>
                <div style={{marginTop: '40px'}}>
                    <ModifyLogin info={this.props.info}/>
                    <ModifyInfo info={this.props.info}/>
                </div>
            </div>
        )
    }
}

export default UserPage;