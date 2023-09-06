import React, { Component } from 'react'
import '../Styles/Home.css'

import Navbar from './Navbar'
export default class Home extends Component {
    render() {
        return (
            <div className="Home__main">
               <div className="Home__main__title">
                   <div className="Home__title__principal">
                        <h1>
                            Web
                        </h1>
                        <h1>
                            Developer
                        </h1>
                   </div>
                   <div className="Home__main__secondary">
                        <h4>Jose Eduardo Vazquez Cortez</h4>
                   </div>
               </div>
                <div className="Home__main__navbar">
                    <Navbar navbar_class="itIsNotHome "/>
                </div>

            </div>
        )
    }
}

