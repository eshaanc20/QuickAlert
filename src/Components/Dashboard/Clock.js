import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.time = new Date()
        this.state = {
            update: true
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.time = new Date();
            this.setState(state => ({
                update: !state.update
            }))
        }, 500);
    }

    render() {
        return (
            <div style={{color: "white"}}>
                {this.time.getHours() < 10? 
                    "0" + this.time.getHours() : this.time.getHours()
                }:
                {this.time.getMinutes() < 10 ?
                    "0" + this.time.getMinutes() : this.time.getMinutes() 
                }:
                {this.time.getSeconds() < 10 ?
                    "0" + this.time.getSeconds() : this.time.getSeconds()
                }
            </div>
        )
    }
}

export default Clock;