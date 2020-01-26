import React, {Component} from 'react';
import Navbar from './Navbar'
import Title from './Title'
import Registration from '../Registration/Registration'

class Homepage extends Component {
    render () {
        return (
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#ff5050"}}>
                <Navbar loginHandler={this.props.loginHandler} user={this.props.user} type={this.props.type} />
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <Title />
                    <div style={{width: "85%"}}>
                        <Registration />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;