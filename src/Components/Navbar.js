import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom'

import '../Styles/Navbar.css'
export default class Navbar extends Component {
    state={
        menuOpen:"",
        navbar_css:{
            display: "none!important"
        },
        size: window.matchMedia('(max-width: 700px)'),
        navbar_container: this.props.burguer,
        burguer: this.props.navbar_class,
        
    }
    OpenMenu = ()=>{
        if(this.state.size.matches){
            this.setState({
                burguer:"itIsNotHome ",
                navbar_container:""
            })

        }

        console.log("Open menu", this.state.navbar_container, this.state.size.matches)

    }
    CloseMenu = ()=>{
        if(this.state.size.matches){
            this.setState({
                navbar_container:"burger_menu ",
                burguer:"itIsNotHome "
            })
        }
    }
    render() {
        let home;
        if(this.props.home){
            home = <Link className="navbar__container__link"  to="Home" > Home </Link>
        }
      /*   let closeMenu = ()=>{
            console.log("Open menu")
            menuOpen = {
                display:"block!important"
            }
            navbar_css ={
                display: "none!important"
            } 
        }*/
        return (
            <div>
                <div onClick={this.OpenMenu} className={ this.state.burguer + "mobile_menu"}>
                    <svg width="124" height="121" viewBox="0 0 124 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" y="14" width="102" height="19" rx="9" fill="white"/>
                    <rect x="11" y="51" width="102" height="19" rx="9" fill="white"/>
                    <rect x="11" y="88" width="102" height="19" rx="9" fill="white"/>
                    </svg>
                </div>
                <div onClick={this.CloseMenu} style={this.state.navbar_css}  className={this.state.navbar_container + " navbar"}>
                    <nav  className="navbar__container">
                        <Link className="navbar__container__link" to="Experience" > Experience </Link>
                        <Link className="navbar__container__link" to="Projects" > Projects </Link>
                        <Link className="navbar__container__link" to="Contact" > Contact </Link>
                        {home}
                    </nav>
                    <div className="white_bar">
                    </div>
                </div>
            </div>
        )
    }
}
