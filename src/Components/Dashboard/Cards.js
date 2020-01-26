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
                <Card style={{width: "30%", height: "40%"}}>
                    <CardActionArea>
                        <CardMedia
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Eshaan
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Eshaan is a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Cards;