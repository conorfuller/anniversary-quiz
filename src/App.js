import React, {Component} from 'react'
import NavBar from './components/NavBar'
import QuestionList from "./components/QuestionList";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class App extends Component {

    state = {
        'girlfriendName': null,
        'girlfriendNameInput': '',
    };

    render() {
        if (this.state.girlfriendName) {
            return (
                <div>
                    <NavBar name={this.state.girlfriendName}/>
                    <QuestionList/>
                </div>
            )
        } else {
            return (
                <div style={{marginLeft: '10px', marginTop: '16px'}}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        spacing={4}
                    >
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Card raised={true}>
                                <CardContent>
                                    <Typography component="p">
                                        Please enter current girlfriends name here:
                                    </Typography>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        //className={classes.textField}
                                        value={this.state.girlfriendNameInput}
                                        onChange={(event) => {
                                            this.setState({girlfriendNameInput: event.target.value})
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" color="primary" onClick={() => {
                                        this.setState({girlfriendName: this.state.girlfriendNameInput})
                                    }}>
                                        Start quiz!
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

            )

        }
    }
}

export default App