import React, { Component } from 'react'
import '../Styles/Projects.css'
export default class Project_Component extends Component {

     
    render() {
        let dir_base = window.location.href.split('P')[0] + "img/"
        let base = window.location.href.split('P')[0]
        let bakend
        let frontend
        if(this.props.data.backend.length !== 0){
            bakend = <div>
                <p className="project_component__subtitle">Back-End</p>
                <div className="project_component__container_technologies">
                    {this.props.data.backend.map(technology=>(
                        <div key={technology.title} className="tecnologie_container white">
                            <p className="technologie__title white">
                                {technology.title}
                            </p>
                            <img  className="project_component__icon" src={ dir_base + technology.img} alt={technology.alt} />
                        </div>
                    ))}

                </div>
            </div>
        }
        if(this.props.data.frontend.length !== 0){
            frontend = <div>
                <p className="project_component__subtitle">Front-End</p>
                <div className="project_component__container_technologies">
                    {this.props.data.frontend.map(technology=>(
                        <div key={technology.title} className="tecnologie_container">
                            <p className="technologie__title">
                                {technology.title}
                            </p>
                            <img className="project_component__icon" src={dir_base + technology.img} alt={technology.alt} />
                        </div>
                    ))}
                </div>
            </div>
        }
        return (
            <div id={this.props.data.id} key={this.props.data.id} className="project_component">
                <div className="project_component__img_container">
                    <img className="project_component__img" src={dir_base +this.props.data.img} alt="Imagen Site" srcSet=""/>
                    <a rel="noreferrer" target="_blank" href={base + "Project/" +this.props.data.id}>Ver mas</a>
                </div>
                <div className="project_component__technologies">
                    <h3 className="project_component__title">{this.props.data.title}</h3>
                    {frontend}
                    {bakend}
                    
                </div>
            </div>
        )
    }
}
