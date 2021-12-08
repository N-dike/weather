import React, { Component } from 'react'
import './style.scss'

export default class BottomDiv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationName:''
        }
    }
    
    
    chHandler=(e)=>{
        this.setState({locationName: e.target.value })
        
          }

render() {
    const {chHandler, } = this.state
    const { Submission} = this.props    
        return ( 
        <div className='B-container'>
            <div className='bottom'>
             <div className='form-container'>
                 <form className='update-location'
                 onSubmit={Submission}>
             <label className='label' htmlFor='location-name'>
                            Location Name
                        </label>
                        <input className='location-name'
                        onChange={chHandler}
                        type='text' placeholder='City Name'
                        />
                           <button className='btn btn-sm btn-primary mb-2'
            type='submit'> Select
            </button>
            </form>
                    </div>
                    </div>
             </div>
        )
    }
}