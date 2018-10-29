import React from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions/colorActions';


class Home extends React.Component {
    // state = {
    //     activeColor: ''
    // };

    render() {
        const oneColor = this.props.colors.map((color, i) => {
            return (
                <Link to={`/color/${color.name}`}
                      className='colorBox'
                      onClick={() => {this.props.activeColor(color)}}
                      style={{background: color.code}}
                      key={i}
                />
            )
        });
        return (
            <div className='Home'>
                <div className="palette">
                    {oneColor}
                </div>
                <h2>Color picker</h2>
                {/*<Link className='link' to='/colors'>read about colors</Link>*/}
                {/*<Link className='link'to='/quiz'>start eye test</Link>*/}
            </div>

        )
    }
};


const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
};

export default connect(mapStateToProps, actions)(Home)
