import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './Cards.css';

class Cards extends Component {
    responded = () => {
        axios.post("https://quick-alert.herokuapp.com/responded", {
            name: this.props.name
        })
    }
    render () {
        return (
            <div className='card'>
                <Card className="element">
                    <CardActionArea>
                        <CardContent>
                            <div className="card-title">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.name}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p><strong>Location:</strong> {this.props.address}</p>
                                <p><strong>Phone Number:</strong> {this.props.phoneNumber}</p>
                                <p><strong>Age:</strong> {this.props.age}</p>
                                <p><strong>Medical Conditions:</strong> {this.props.medicalConditions}</p>
                                <p><strong>Other Details:</strong> {this.props.otherDetails}</p>
                                <p><strong>Time:</strong> {this.props.time.substring(0,24)}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {!this.props.responded? 
                        <Button size="small" style={{color: "#f44336", marginLeft: '40%'}} onClick={this.responded}>
                            Respond
                        </Button>:null}
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Cards;