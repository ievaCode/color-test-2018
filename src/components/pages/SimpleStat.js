import React from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions/resultsActions';

class SimpleStat extends React.Component {
    render() {
        const oneColor = this.props.colors.map((color, i) => {
            return (
                <div className='colorBox'
                     style={{background: color.code}}>
                    <p>You've managed</p>
                    <h5>Level <span>0</span></h5>
                    <Link to={`/quiz/${color.name}`}
                          onClick={() => {
                              this.props.activeColor(color)
                          }}
                          key={i}>Try again</Link>
                </div>
            )
        });
        return (
            <div className='Home Color Quiz'>
                <p>Want to see you result over time? All you need to do is <Link to='/register'>register</Link> on our
                    site.</p>
                <div className="palette">
                    {oneColor}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active,
        // results: state.results
    }
};

export default connect(mapStateToProps, actions)(SimpleStat)
