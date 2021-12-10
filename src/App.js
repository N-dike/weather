import axios from 'axios'
import './sass/app.scss'
import React, { Component } from 'react'
import TopDiv from './components/Top/index'
import BottomDiv from './components/Bottom'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
cityName: 'Lagos',
isLoading: true,
showBottomDiv: false
    }
    this.hideComponent = this.hideComponent.bind(this)
    this.Submission = this.Submission.bind(this)
  }

  
  hideComponent(){
    this.setState({showBottomDiv: !this.state.showBottomDiv})
  }
       Submission = e =>{
         
         e.preventDefault()
        this.setState({cityName: e.target[0].value})

            }
   
  
 
  render() {
    const {cityName, iconURL, isDay, isLoading, temp_c, text} = this.state
    const WEATHER_KEY = 'ea05abba7d3f471188014945211609'
    const URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${cityName}&aqi=no`
    axios.get(URL).then(res =>{
        return res.data
    }).then((data)=>{
        this.setState({
          forecastdays:data.forecast,
          isLoading: false,
          iconURL: data.current.condition.icon, 
          isDay: data.current.is_day, 
          temp_c: data.current.temp_c, 
          text:data.current.condition.text})
    }).catch(err=> {
      (err)? console.error('Cannot fetch from API', err): console.log('fetch data');
    })
  
    return (     
<div className='app-container'>
      <div className="main-container">
          {isLoading && <div className='d-flex align-items-center'>
<strong>Loading the Weather</strong>
  <div className="spinner-border text-info ml-3" role="status">
</div>
</div>} 
          {!isLoading &&  
     <><div className='top'>
              <TopDiv
                hideComponent={this.hideComponent}
                iconURL={iconURL}
                isDay={isDay}
                location={cityName}
                temp_c={temp_c}
                text={text} /></div><div className='bottom'>

                {this.state.showBottomDiv ? <BottomDiv
                  chHandler={this.chHandler}
                  Submission={this.Submission}/> : null}
              </div></>
  }
      </div>
      </div>   
      
       
    )
  
  
}
}





