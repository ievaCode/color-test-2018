import React from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions/colorActions';


class QuizIntro extends React.Component {

    render() {
        const oneColor = this.props.colors.map((color, i) => {
            return (
                <Link to={`/quiz/${color.name}`}
                      onClick={() => {
                          this.props.activeColor(color)
                      }}
                      className={this.props.active.name === color.name ? 'colorBox active' : 'colorBox'}
                      style={{background: color.code}}
                      key={i}/>
            )
        });
        return (
            <div className='Home Color Quiz'>
                {/*<h3>Eye Test</h3>*/}
                {/*<h5>how good do you distinguish color tones??</h5>*/}
                <p>In each round you will get a table of 10x6 squares 5 of which will differ in their tone. All you need
                    to do is click on them. At least 3 right choises will lead you to the next level. Once done you can
                    see your results in the section Statistics. Even more - you can take this test periodicly and see
                    your progress in a long run. Sounds good? To get this feature you will need
                    to <Link to='/register'>register</Link> on our site.</p>
                <div className="palette">
                    {oneColor}
                </div>
                <h6>choose color to start the test</h6>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active
    }
};

export default connect(mapStateToProps, actions)(QuizIntro)


