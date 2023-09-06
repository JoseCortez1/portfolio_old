import React, { Component } from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Project from './LandingPage_Project'
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" children={ <Home />} />
                    <Route path="/Experience" children={ <Experience />} />
                    <Route path="/Projects" children={ <Projects />} />
                    <Route path="/Contact" children={ <Contact />} />
                    <Route path="/Project/:id" children={ <Project />} />
                    <Route path="*" > 
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }
}
