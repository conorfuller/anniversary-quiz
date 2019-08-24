import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


class Question extends Component {
    state = {
        answered: false,
        status: ''
    };

    styles = {
        error: {
            backgroundColor: '#f50057',
            opacity: '0.5'
        },
        success: {
            backgroundColor: '#9df551',
            opacity: '0.5'
        }
    };

    render() {
        console.log(this.state);


        return (
            <div>
                {this.props.question ? (
                    <Card raised={true} style={ this.state.answered === true ? (this.state.status === 'INCORRECT' ? this.styles.error : this.styles.success) : undefined}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Question {this.props.question.number}
                            </Typography>
                            <Typography component="p">
                                {this.props.question.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="primary" onClick={()=> {
                                this.setState({answered: true, status: 'CORRECT'});
                                this.props.setCorrectQuestion();
                            }} disabled={this.state.answered}>
                                Correct
                            </Button>
                            <Button variant="contained" size="small" color="secondary"
                                    onClick={()=> {
                                        this.setState({answered: true, status: 'INCORRECT'});
                                        this.props.setIncorrectQuestion();
                                    }}
                                    disabled={this.state.answered}
                            >
                                Incorrect
                            </Button>
                        </CardActions>
                    </Card>
                ) : null}
            </div>
        )
    }
}

export default Question