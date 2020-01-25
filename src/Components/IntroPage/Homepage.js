import React, {Component} from 'react';
import Navbar from './Navbar'
import Title from './Title'

class Homepage extends Component {
    render () {
        return (
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#ff5050"}}>
                <Navbar />
                <Title />
            </div>
        )
    }
}

export default Homepage;