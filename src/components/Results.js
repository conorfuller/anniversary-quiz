import React from 'react'
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const Results = (props) => {

    const getContent = (correct, total) => {
        if (correct >= 7) {
            return (
                <div>
                    You got {props.correct} out of {total} correct. You are a:
                    <h1> Decent girlfriend! </h1>
                    I'll keep you a bit longer
                </div>
            )
        } else if (correct >= 5 && correct < 7) {
            return (
                <div>
                    You got {correct} out of {total} correct. You are a:
                    <h1> Half decent girlfriend! </h1>
                    Get practicing for next year
                </div>
            )
        } else {
            return (
                <div>
                    You got {correct} out of {total} correct. You are a:
                    <h1> Awful girlfriend! </h1>
                    Take me to an escape room and I might forgive you.
                </div>
            )
        }
    };

    return (
        <Card raised={true}>
            <CardContent>
                <Typography component="p">
                    {getContent(props.correct, props.total)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color="primary" onClick={() => {
                    window.location.reload();
                }}>
                    Try again
                </Button>
            </CardActions>
        </Card>
    )
};

export default Results;