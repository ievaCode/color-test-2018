import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import logo from '../../img/logo.png';


const Header = (props) => {
    return (
        <header>
            {/*<img src={logo} alt=""/>*/}
            <div className='left'>
                <Link to="/">home</Link>
                <Link to='/quiz'>eye test</Link>
            </div>
            <div className='right'>
                <Link to='/statistics'>statistics</Link>
                <Link to='/login'>login</Link>
            </div>
        </header>
    );
};

export default Header