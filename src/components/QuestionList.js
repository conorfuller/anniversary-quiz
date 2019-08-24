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
            {description: 'Where did Samson get his name?', status: null},
            {description: 'What is my Snapchat name?', status: null},
            {description: "What's my mum's dads name?", status: null},
            {description: 'What is my favourite band?', status: null},
            {description: 'What are 3 things I like about you?', status: null},
            {description: 'What are 3 things I dislike about you?', status: null},
            {description: 'What is my favourite song in the whole wide world?', status: null},
            {description: 'What was the name of my band?', status: null},
            {description: 'Name 1 thing I would do if I won the lottery', status: null},
            {description: 'What is my favourite thing that you wear?', status: null},
            {description: 'Describe my morning routine', status: null},
            {
                description: "True or false - at uni I had to visit the head's office 3 times for getting in trouble",
                status: null
            },
            {description: 'Who said I love you first?', status: null},
            {description: 'If I had to pick a best man right now, who would it be?', status: null},
            {description: 'If I could go anywhere in the world right now, where would it be?', status: null},
            {description: 'Name a belonging of yours that I would get rid of if I could', status: null},
            {description: 'What was I wearing on our first date?', status: null},
            {description: 'How many holidays have we been on together? (Non UK)', status: null},
            {description: 'How many holidays have we been on together? (Non UK)', status: null},
            {description: 'What is my favourite colour?', status: null}
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