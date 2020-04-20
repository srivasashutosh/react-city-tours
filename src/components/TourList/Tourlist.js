import React, { Component } from 'react'
import Tour from '../Tours/Tours'
import './TourList.scss'
import {tourData} from '../../tourData'
export default class  extends Component {

    state = {
        tours : tourData
    };

    removeTour = id =>{
      const filteredTour = this.state.tours.filter(item=> item.id!==id)
      this.setState({
        tours : filteredTour
      })
    }
  render() {

    const {tours} = this.state;

    return (
      <section className = "tourlist">
        {
            tours.map(tour => (<Tour key={tour.id} tour= {tour} 
                removeTour= {this.removeTour}></Tour>))
        }
      </section>
    )
  }
}
