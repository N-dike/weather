import React, { Component } from 'react'
import'./style.scss'
import Weather from './weather'
export default class TopDiv extends Component {
    render() {
      const {hideComponent} = this.props
        return ( <div className='T-container'>
<div className="title">4 Cast</div>
<Weather {...this.props}/>
  <button 
    className='btn btn-primary btn-sm mb-2'
    onClick={()=> hideComponent()}>
      Change weather
    </button>
           </div>
          
          
        
         ) }
}