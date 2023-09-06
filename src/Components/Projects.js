import React, { Component } from 'react'
import Navbar from './Navbar'

import Project from './Project_Component'
import {projects} from '../Resources/projects.json'

import '../Styles/Projects.css'
import '../index.css'
export default class Projects extends Component {
    render() {
        let projects_reverse = projects.reverse()
        return (
            <div className="projects background_black">
                <Navbar burguer="itIsNotHome " navbar_class="burger_menu " home={true}/>
                <div className="container_projects">
                    {projects_reverse.map( project =>(
                        <Project key={project.id} data={project} />
                    ))}
                </div>
            </div>
        )
    }
}
