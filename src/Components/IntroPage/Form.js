import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends Component {

    render() {
        return ( 
            <div >

                <h1>Quick Alert!</h1>
                <div>
                    <TextField id = "outlined-basic"
                    label = "Outlined"
                    variant = "outlined" />

                    <TextField id = "outlined-basic"
                    label = "Outlined"
                    variant = "outlined" />

                    <TextField id = "outlined-basic"
                    label = "Outlined"
                    variant = "outlined" />

                    {/* checkboxes, first name, last name, email, password */}
                </div>


            </div>
        )
    }
}

export default Form;