import React, { Component } from 'react';
import Dashbar from './Dashbar';
import Cards from './Cards';


class Dashboard extends Component {
    render() {
        return (
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#ff5050" }}>
                <Dashbar />
                <Cards />
            </div>
        )
    }
}

export default Dashboard;