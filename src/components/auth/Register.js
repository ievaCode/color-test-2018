import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/authActions'

class Register extends React.Component {

    state = {
        email: '',
        firstname: '',
        surname: '',
        password: '',
        password2: ''
    };

    onInputChange = (e) => {
        console.log(e.name);
        console.log(e.target);
        this.setState({[e.target.name]: e.target.value});
    };

    register = (e) => {
        e.preventDefault();
        this.props.register(this.state, this.props.history)
    };



    render() {
        return (
            <div className='Login'>
                <form className='registration'
                    onSubmit={this.register}>
                    <h3>registration</h3>
                    <input autoComplete="new-email"
                           value={this.state.email}
                           type='text'
                           name='email'
                           onChange={this.onInputChange}
                           placeholder='email'/>
                    <input autoComplete="new-firstname"
                           type="text"
                           onChange={this.onInputChange}
                           name='firstname'
                           value={this.state.firstname}
                           placeholder='name'/>
                    <input autoComplete="new-surname"
                           type="text"
                           onChange={this.onInputChange}
                           name='surname'
                           value={this.state.surname}
                           placeholder='surname'/>
                    <input autoComplete="new-password"
                           type='password'
                           onChange={this.onInputChange}
                           name='password'
                           value={this.state.password}
                           placeholder='password'/>
                    <input autoComplete="new-password2"
                           type='password'
                           onChange={this.onInputChange}
                           name='password2'
                           value={this.state.password2}
                           placeholder='confirm password'/>
                    <button>register</button>
                </form>
            </div>
        )
    }
}

export default connect(null, actions)(Register)
