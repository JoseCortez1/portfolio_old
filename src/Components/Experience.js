import React, { Component } from 'react'
import '../Styles/Experience.css'
import '../index.css'
import Navbar from './Navbar'
import {jobs} from '../Resources/experience.json'
import { Markup } from 'interweave'
export default class Experience extends Component {
    render() {
        let jobs_reverse = jobs.reverse()
        return (
            <div className="experience background_black">
                <Navbar burguer="itIsNotHome " navbar_class="burger_menu " home={true}/>
                <div className="experience__container">
                    {
                        jobs_reverse.map( job => (
                            <div className="experience__job" key={job.title} >
                                <p className="experience__job__title">{job.title}</p>
                                <p className="experience__job__company">{job.company}</p>
                                <p className="experience__job__date">{job.date_start} to {job.date_end}</p>
                                <Markup className="experience__job__description" content={ job.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
