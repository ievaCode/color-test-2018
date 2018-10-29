import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/authActions';
import {Link} from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    login = (e) => {
        e.preventDefault();
        this.props.login(this.state, this.props.history)
    };

    render() {
        return (
            <div className='Login'>
                <h4>Hi! First time here?? <Link to='/register'>Registration form</Link> is what you need then.</h4>
                <form onSubmit={this.login}>
                    <h3>login</h3>
                    <input className='email'
                        autoComplete="new-email"
                           type='text'
                           onChange={this.onInputChange}
                           name='email'
                           value={this.state.email}
                           placeholder='email'
                    />
                    <input autoComplete="new-password"
                           type='password'
                           onChange={this.onInputChange}
                           name='password'
                           value={this.state.password}
                           placeholder='password'
                    />
                    <button>login</button>
                </form>
            </div>
        )
    }
}


export default connect(null, actions)(Login)
