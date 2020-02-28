import React, {Component} from 'react';
import DashBar from '../Dashboard/Dashbar';

class UserPage extends Component {
    render() {
        return (
            <div>
                <DashBar logoutHandler={this.props.logoutHandler}/>
            </div>
        )
    }
}

export default UserPage;