import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

class Chasqui extends Component {
    constructor(...props){
        super(...props)
        this.state={
            
        }    
    }

    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/home' component={Home}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Chasqui
