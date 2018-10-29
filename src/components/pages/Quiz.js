import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/resultsActions';
import check from '../../img/check2.svg';
import wrong from '../../img/wrong.svg';

class Quiz extends React.Component {
    state = {
        guessCount: 0,
        rightGuessCount: 0,
        wrongGuessCount: 0,
        random: [],
        squares: [],
        wasChecked: [],
        opacity: 0.5,
        level: 1
    };

    componentDidMount() {
        this.startNewTest();

    }

    startNewTest = () => {
        // this.props.setResult(this.state.level);
        var level = 1;
        var opacity = 0.5;

        this.setState({
            opacity,
            level
        }, () => {
            this.getNewBoard();
        });
        console.log(this.state)
    };


    getNewBoard = (prevState) => {
        // this.props.setResult(this.state.level);
        this.state.rightGuessCount > 2 && this.setState((prevState) => ({level: prevState.level + 1}));
        var opacity = this.state.opacity * 0.8;
        var squares = [];
        for (var i = 0; i < 60; i++) squares.push(i);
        var random = [];
        for (var a = 0; random.length < 5; a++) {
            const b = (Math.floor((Math.random() * 60) + 1));
            !_.includes(random, b) && random.push(b);
        }

        this.setState({
            random,
            squares,
            guessCount: 0,
            rightGuessCount: 0,
            wrongGuessCount: 0,
            wasChecked: [],
            opacity
        })
    };

    guess = (square) => {
        _.includes(this.state.random, square) &&

        this.setState((prevState, props) => ({
                guessCount: prevState.guessCount + 1,
                wasChecked: [...prevState.wasChecked, square],
                rightGuessCount: prevState.rightGuessCount + 1
            })
        );

        !_.includes(this.state.random, square) &&
        this.setState((prevState, props) => ({
            guessCount: prevState.guessCount + 1,
            wasChecked: [...prevState.wasChecked, square],
            wrongGuessCount: prevState.wrongGuessCount + 1
        }), () => {
            this.state.guessCount === 5 && this.props.setResult(this.state.level, this.props.active.code);
        })
    };


    render() {

        const cells = this.state.squares.map((square, i) => {
            return (
                <div className='cell'
                     key={i}
                     style={{
                         backgroundColor: _.includes(this.state.random, square) ? this.props.active.code : this.props.active.code,
                         opacity: _.includes(this.state.random, square) ? (1 - this.state.opacity) : '1',
                         cursor: _.includes(this.state.wasChecked, square) ? 'default' : 'pointer'
                     }}
                     onClick={() => {
                         if (!_.includes(this.state.wasChecked, square) && (this.state.guessCount < 5)) this.guess(square)
                     }}>

                    <img style={{display: _.includes(this.state.wasChecked, square) ? 'block' : 'none'}}
                         src={_.includes(this.state.random, square) ? check : wrong}
                    />
                </div>
            )
        });

        return (
            <div className='Quiz'>
                <h3>Level {this.state.level}</h3>
                <div className='board'>
                    {cells}
                    <p style={{
                        display: this.state.guessCount === 5 && this.state.rightGuessCount < 3 ? 'block' : 'none'
                    }}
                       className='message'>
                        Hm.. you've made {this.state.rightGuessCount} right choices. Too little...
                    </p>
                    <p style={{
                        display: this.state.guessCount === 5 && this.state.rightGuessCount > 2 ? 'block' : 'none'
                    }}
                       className='message'>
                        You've got {this.state.rightGuessCount} out of 5!
                    </p>
                </div>
                <div style={{
                    display: this.state.guessCount === 5 && this.state.rightGuessCount < 3 ? 'block' : 'none',
                    background: this.props.active.code
                }}
                     className='btn'
                     onClick={this.startNewTest}>
                    start all over again
                </div>

                <div style={{
                    display: this.state.guessCount === 5 && this.state.rightGuessCount > 2 ? 'block' : 'none',
                    background: this.props.active.code
                }}
                     className='btn'
                     onClick={this.getNewBoard}>go to next level
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active,
        results: state.results
    }
};

export default connect(mapStateToProps, actions)(Quiz)

