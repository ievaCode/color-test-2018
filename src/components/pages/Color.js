import React from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions/colorActions';


class Color extends React.Component {

    // textColor = (color) => lightness(color) > 50 ? '#000000' : '#ffffff';

    render() {
        const oneColor = this.props.colors.map((color, i) => {
            return (
                <Link to={`/color/${color.name}`}
                      onClick={() => {
                          this.props.activeColor(color)
                      }}
                      className={this.props.active.name === color.name ? 'colorBox active' : 'colorBox'}
                      style={{background: color.code}}
                      key={i}>
                    <h4 style={{color: color.code}}>{this.props.active.name === color.name ? color.name : null}</h4>
                    {/*<p style={{color: {lightness(color.code) > 50 ? '#000000' : '#ffffff'}}}>{this.props.active.name === color.name ? color.desc : null}</p>*/}
                    <p style={{color: '#ffffff'}}>{this.props.active.name === color.name ? color.desc : null}</p>
                </Link>
            )
        });
        return (
            <div className='Home Color'>
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
        active: state.active
    }
};

export default connect(mapStateToProps, actions)(Color)















