import React, {Component} from 'react'
import Question from "./Question";
import Grid from "@material-ui/core/Grid";
import Results from "./Results";

class QuestionList extends Component {
    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    state = {
        questions: this.shuffle([
            {description: 'What is my favourite thing that you wear?', status: null},
            {description: 'Name a belonging of yours that I would get rid of if I could', status: null},
            {description: 'What was the first instrument I learnt to play?', status: null},
            {description: 'Who came up with the name Jonah?', status: null},
            {description: 'What’s the nickname my parents used to call me?', status: null},
            {description: 'Name 5 foods I don’t like', status: null},
            {description: 'Name 5 bands/musicians I like', status: null},
            {description: 'What are my 3 favourite things about you?', status: null},
            {description: 'What are my 3 least favourite things about you?', status: null},
            {description: 'Name 3 things I’m afraid of', status: null},
        ]),
        correctQuestions: 0,
        incorrectQuestions: 0
        //random sort
    };

    render() {
        console.log(this.state);
        return (
            <div style={{marginLeft: '10px'}}>
                {this.state.correctQuestions + this.state.incorrectQuestions !== this.state.questions.length ? (
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                            spacing={4}
                        >
                            {this.state.questions.map((question, index) => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Question
                                        question={{description: question.description, number: index + 1}}
                                        setIncorrectQuestion={() => this.setState({incorrectQuestions: this.state.incorrectQuestions + 1})}
                                        setCorrectQuestion={() => this.setState({correctQuestions: this.state.correctQuestions + 1})}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) :
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        spacing={4}
                    >

                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Results correct={this.state.correctQuestions} total={this.state.questions.length}/>
                        </Grid>
                    </Grid>

                }
            </div>
        )
    }
}

export default QuestionList;