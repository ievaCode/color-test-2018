import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
// import SimpleStat from './components/pages/SimpleStat';
import QuizIntro from './components/pages/QuizIntro';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Color from './components/pages/Color';
import Quiz from './components/pages/Quiz';
// import NotFound from './components/pages/NotFound';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='body'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/color/' component={Color}/>
                        {/*<Route path='/statistics' component={SimpleStat}/>*/}
                        {/*<Route path='/statistics' component={AdvancedStat}/>*/}
                        <Route exact path='/quiz' component={QuizIntro}/>
                        <Route path='/quiz/:color' component={Quiz}/>
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App
