import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Cards extends Component {

    render () {
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "10%"}}>
                <Card style={{width: "20%", height: "40%"}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>Location: {this.props.address}</p>
                                <p>Phone Number: {this.props.phoneNumber}</p>
                                <p>Age: {this.props.age}</p>
                                <p>Medical Conditions: {this.props.conditions}</p>
                                <p>Other Details: {this.props.otherDetails}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" style={{color: "#f44336"}}>
                            Respond
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Cards;